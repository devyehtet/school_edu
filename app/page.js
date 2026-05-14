'use client';

import { useEffect, useMemo, useState } from 'react';

const lessons = [
  {
    id: 'funnel-basics',
    week: 'Week 1',
    title: 'Marketing Funnel Basics',
    summary: 'Customer journey ကို awareness ကနေ purchase အထိနားလည်အောင်လေ့လာမယ်။',
    duration: '4 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Marketing funnel ရဲ့ ပထမဆုံးအဆင့်ကဘာလဲ။',
      options: ['Awareness', 'Purchase', 'Retention'],
      answer: 'Awareness',
    },
  },
  {
    id: 'audience-persona',
    week: 'Week 1',
    title: 'Audience Persona',
    summary: 'Target audience ရဲ့ needs, goals, pain points တွေကို persona အဖြစ်ရေးဆွဲမယ်။',
    duration: '5 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Audience persona ထဲမှာ မဖြစ်မနေပါသင့်တာကဘာလဲ။',
      options: ['Pain points', 'Logo color', 'Office address'],
      answer: 'Pain points',
    },
  },
  {
    id: 'keyword-research',
    week: 'Week 2',
    title: 'Keyword Research',
    summary: 'Search intent နဲ့ competition ကိုကြည့်ပြီး SEO keyword list တည်ဆောက်မယ်။',
    duration: '6 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Keyword ရွေးချယ်ရာမှာ အရေးကြီးဆုံးစဉ်းစားရမယ့်အချက်ကဘာလဲ။',
      options: ['Search intent', 'Font size', 'Page color'],
      answer: 'Search intent',
    },
  },
  {
    id: 'content-calendar',
    week: 'Week 2',
    title: 'Content Calendar Planning',
    summary: 'Post topic, publish date, channel တွေကို calendar တစ်ခုအဖြစ်စီမံမယ်။',
    duration: '5 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Content calendar က ဘာအတွက်အများဆုံးအသုံးဝင်လဲ။',
      options: ['Consistency planning', 'Video compression', 'Password reset'],
      answer: 'Consistency planning',
    },
  },
];

const tools = ['Google Analytics', 'Google Ads', 'Meta Ads Manager', 'Canva', 'Mailchimp'];

const initialLessonProgress = {
  videoFinished: false,
  quizAnswer: '',
};

function getLessonProgress(progress, lessonId) {
  return progress[lessonId] ?? initialLessonProgress;
}

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState({});
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const [notice, setNotice] = useState('');
  const activeLesson = lessons[activeIndex];
  const activeProgress = getLessonProgress(progress, activeLesson.id);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem('dm-learn-progress');

    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch {
        setProgress({});
      }
    }

    setHasLoadedProgress(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedProgress) {
      return;
    }

    window.localStorage.setItem('dm-learn-progress', JSON.stringify(progress));
  }, [hasLoadedProgress, progress]);

  const completedLessonCount = useMemo(() => {
    return lessons.filter((lesson) => {
      const lessonProgress = getLessonProgress(progress, lesson.id);

      return lessonProgress.videoFinished && Boolean(lessonProgress.quizAnswer);
    }).length;
  }, [progress]);

  const isLessonUnlocked = (index) => {
    if (index === 0) {
      return true;
    }

    return lessons.slice(0, index).every((lesson) => {
      const lessonProgress = getLessonProgress(progress, lesson.id);

      return lessonProgress.videoFinished && Boolean(lessonProgress.quizAnswer);
    });
  };

  const updateLessonProgress = (lessonId, updates) => {
    setProgress((currentProgress) => ({
      ...currentProgress,
      [lessonId]: {
        ...getLessonProgress(currentProgress, lessonId),
        ...updates,
      },
    }));
  };

  const getBlockedReason = (targetIndex) => {
    const blockingLesson = lessons.slice(0, targetIndex).find((lesson) => {
      const lessonProgress = getLessonProgress(progress, lesson.id);

      return !lessonProgress.videoFinished || !lessonProgress.quizAnswer;
    });

    if (!blockingLesson) {
      return '';
    }

    const blockingProgress = getLessonProgress(progress, blockingLesson.id);

    if (!blockingProgress.videoFinished && !blockingProgress.quizAnswer) {
      return `${blockingLesson.title} video ကိုအဆုံးထိကြည့်ပြီး quiz ဖြေပြီးမှ နောက် video ကိုဖွင့်လို့ရပါမယ်။`;
    }

    if (!blockingProgress.videoFinished) {
      return `${blockingLesson.title} video ကိုအဆုံးထိကြည့်ပြီးမှ နောက် video ကိုဖွင့်လို့ရပါမယ်။`;
    }

    return `${blockingLesson.title} ရဲ့ quiz ကိုဖြေပြီးမှ နောက် video ကိုဖွင့်လို့ရပါမယ်။`;
  };

  const selectLesson = (index) => {
    if (!isLessonUnlocked(index)) {
      setNotice(getBlockedReason(index));
      return;
    }

    setActiveIndex(index);
    setNotice('');
  };

  const goToNextLesson = () => {
    if (activeIndex >= lessons.length - 1) {
      return;
    }

    if (!activeProgress.videoFinished || !activeProgress.quizAnswer) {
      setNotice(getBlockedReason(activeIndex + 1));
      return;
    }

    setActiveIndex(activeIndex + 1);
    setNotice('');
  };

  const markVideoFinished = () => {
    if (!activeProgress.videoFinished) {
      updateLessonProgress(activeLesson.id, { videoFinished: true });
    }

    setNotice('Video ပြီးဆုံးသွားပါပြီ။ Quiz ကိုဖြေပြီးရင် နောက် video unlock ဖြစ်ပါမယ်။');
  };

  const resetProgress = () => {
    setActiveIndex(0);
    setProgress({});
    setNotice('Progress ကို reset လုပ်ပြီးပါပြီ။');
  };

  const quizIsCorrect = activeProgress.quizAnswer === activeLesson.quiz.answer;
  const canWatchNext = activeProgress.videoFinished && Boolean(activeProgress.quizAnswer);
  const coursePercent = Math.round((completedLessonCount / lessons.length) * 100);

  return (
    <main>
      <header className="topbar container">
        <div>
          <strong>DM Learn Hub</strong>
          <span>Digital Marketing Course</span>
        </div>
        <nav>
          <a href="#player">Lessons</a>
          <a href="#tools">Tools</a>
          <button type="button" onClick={resetProgress}>Reset</button>
        </nav>
      </header>

      <section id="player" className="learning-shell container">
        <aside className="lesson-sidebar" aria-label="Course lessons">
          <div className="progress-summary">
            <p>Course Progress</p>
            <strong>{completedLessonCount}/{lessons.length} lessons</strong>
            <div className="progress-track" aria-label={`${coursePercent}% complete`}>
              <span style={{ width: `${coursePercent}%` }} />
            </div>
          </div>

          <div className="lesson-list">
            {lessons.map((lesson, index) => {
              const unlocked = isLessonUnlocked(index);
              const lessonProgress = getLessonProgress(progress, lesson.id);
              const completed = lessonProgress.videoFinished && Boolean(lessonProgress.quizAnswer);
              const selected = index === activeIndex;

              return (
                <button
                  type="button"
                  className={`lesson-item${selected ? ' active' : ''}${!unlocked ? ' locked' : ''}`}
                  key={lesson.id}
                  onClick={() => selectLesson(index)}
                  aria-current={selected ? 'step' : undefined}
                  title={unlocked ? lesson.title : getBlockedReason(index)}
                >
                  <span className="lesson-number">
                    {completed ? '✓' : unlocked ? index + 1 : '!'}
                  </span>
                  <span>
                    <small>{lesson.week} • {lesson.duration}</small>
                    <strong>{lesson.title}</strong>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="lesson-player" aria-live="polite">
          <div className="lesson-heading">
            <span>{activeLesson.week}</span>
            <h1>{activeLesson.title}</h1>
            <p>{activeLesson.summary}</p>
          </div>

          <video
            key={activeLesson.id}
            className="video-frame"
            controls
            playsInline
            preload="metadata"
            onEnded={markVideoFinished}
            onTimeUpdate={(event) => {
              const video = event.currentTarget;

              if (video.duration && video.currentTime / video.duration >= 0.95) {
                markVideoFinished();
              }
            }}
          >
            <source src={activeLesson.videoUrl} />
            Your browser does not support the video tag.
          </video>

          <div className="completion-strip">
            <div className={activeProgress.videoFinished ? 'done' : ''}>
              <span>{activeProgress.videoFinished ? '✓' : '1'}</span>
              Video ကိုအဆုံးထိကြည့်ရန်
            </div>
            <div className={activeProgress.quizAnswer ? 'done' : ''}>
              <span>{activeProgress.quizAnswer ? '✓' : '2'}</span>
              Quiz ဖြေရန်
            </div>
          </div>

          <section className="quiz-panel">
            <div>
              <span className="eyebrow">Lesson Quiz</span>
              <h2>{activeLesson.quiz.question}</h2>
            </div>
            <div className="quiz-options">
              {activeLesson.quiz.options.map((option) => (
                <button
                  type="button"
                  className={activeProgress.quizAnswer === option ? 'selected' : ''}
                  key={option}
                  onClick={() => {
                    updateLessonProgress(activeLesson.id, { quizAnswer: option });
                    setNotice('Quiz ဖြေပြီးပါပြီ။ Video ပြီးဆုံးထားရင် နောက် video ကိုသွားလို့ရပါပြီ။');
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {activeProgress.quizAnswer && (
              <p className={quizIsCorrect ? 'quiz-feedback correct' : 'quiz-feedback'}>
                {quizIsCorrect ? 'မှန်ပါတယ်။' : `အဖြေမှန်က ${activeLesson.quiz.answer} ဖြစ်ပါတယ်။`}
              </p>
            )}
          </section>

          {notice && <p className="notice">{notice}</p>}

          <div className="lesson-actions">
            <button
              type="button"
              className="btn primary"
              onClick={goToNextLesson}
              disabled={activeIndex === lessons.length - 1 || !canWatchNext}
            >
              Next Video
            </button>
            {!canWatchNext && (
              <p>Video ပြီးဆုံးပြီး quiz ဖြေပြီးမှ နောက် video ကိုဖွင့်နိုင်ပါမယ်။</p>
            )}
            {activeIndex === lessons.length - 1 && canWatchNext && (
              <p>Course lessons အားလုံးပြီးဆုံးပါပြီ။</p>
            )}
          </div>
        </section>
      </section>

      <section id="tools" className="container section tools">
        <h2>Tools You Will Use</h2>
        <div className="chips">
          {tools.map((tool) => (
            <div className="chip" key={tool}>{tool}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
