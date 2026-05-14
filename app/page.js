'use client';

import { useEffect, useMemo, useState } from 'react';

const lessons = [
  {
    id: 'slide-1',
    week: 'Digital Marketing',
    title: 'Digital Marketing: Beginner to Professional',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-2',
    week: 'Digital Marketing',
    title: 'Course Overview: What You Will Learn',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-3',
    week: 'Digital Marketing',
    title: 'Why Digital Marketing Matters Today',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-4',
    week: 'Digital Marketing',
    title: 'Traditional Marketing vs Digital Marketing',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-5',
    week: 'Digital Marketing',
    title: 'The Digital Marketing Ecosystem',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-6',
    week: 'Digital Marketing',
    title: 'Marketing Funnel Basics',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-7',
    week: 'Digital Marketing',
    title: 'Key Digital Marketing Metrics',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-8',
    week: 'Digital Marketing',
    title: 'Understanding Customer Psychology',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-9',
    week: 'Digital Marketing',
    title: 'Content Strategy Basics',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-10',
    week: 'Digital Marketing',
    title: 'Mastering Social Media in 2025',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-11',
    week: 'Digital Marketing',
    title: 'Organic Social Media Strategy',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-12',
    week: 'Digital Marketing',
    title: 'How Social Media Algorithms Work',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-13',
    week: 'Digital Marketing',
    title: 'Introduction to Meta Ads',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-14',
    week: 'Digital Marketing',
    title: 'Meta Ads Objectives and Business Goals',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-15',
    week: 'Digital Marketing',
    title: 'Digital Marketing Funnel Study Notes',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-16',
    week: 'Digital Marketing',
    title: 'Meta Ads Campaign Structure',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-17',
    week: 'Digital Marketing',
    title: 'Campaign, Ad Set, and Ad Level Explained',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-18',
    week: 'Digital Marketing',
    title: 'Campaign Budget Optimization Explained',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-19',
    week: 'Digital Marketing',
    title: 'Learning Phase and Campaign Performance',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-20',
    week: 'Digital Marketing',
    title: 'Estimated Ad Recall Lift Explained',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-21',
    week: 'Digital Marketing',
    title: 'Meta Ads Budget and Bidding Strategies',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-22',
    week: 'Digital Marketing',
    title: 'Audience Targeting in Meta Ads',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-23',
    week: 'Digital Marketing',
    title: 'Creative Strategy for Meta Ads',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-24',
    week: 'Digital Marketing',
    title: 'TikTok Ads Overview and Creative Best Practices',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-25',
    week: 'Digital Marketing',
    title: 'TikTok Targeting and Scaling Strategy',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-26',
    week: 'Digital Marketing',
    title: 'The Google Ads Ecosystem',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-27',
    week: 'Digital Marketing',
    title: 'Search Intent and Keyword Strategy',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-28',
    week: 'Digital Marketing',
    title: 'Google Ads Basics: Your Digital Storefront',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-29',
    week: 'Digital Marketing',
    title: 'Performance Max: AI-Powered Campaigns',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-30',
    week: 'Digital Marketing',
    title: 'SEO Fundamentals',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-31',
    week: 'Digital Marketing',
    title: 'SEO vs SEM: Organic and Paid Search',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-32',
    week: 'Digital Marketing',
    title: 'Analytics and Data-Driven Decision Making',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-33',
    week: 'Digital Marketing',
    title: 'GA4 Basics: Your Marketing Command Center',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-34',
    week: 'Digital Marketing',
    title: 'Tracking and Pixel Fundamentals',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-35',
    week: 'Digital Marketing',
    title: 'Full-Funnel Budget Allocation Strategy',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-36',
    week: 'Digital Marketing',
    title: 'Advanced Optimization Beyond A/B Testing',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-37',
    week: 'Digital Marketing',
    title: 'The Optimization Stack That Scales',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-38',
    week: 'Digital Marketing',
    title: 'Cross-Platform Marketing Strategy',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-39',
    week: 'Digital Marketing',
    title: 'Platform Integration and 360° Customer View',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-40',
    week: 'Digital Marketing',
    title: 'Digital Marketing Career Paths',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-41',
    week: 'Digital Marketing',
    title: 'Specialized Digital Marketing Career Trajectories',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-42',
    week: 'Digital Marketing',
    title: 'Capstone Project: Portfolio Masterpiece',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-43',
    week: 'Digital Marketing',
    title: 'Building Your Marketing Portfolio',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-44',
    week: 'Digital Marketing',
    title: 'Your Digital Marketing Future Starts Now',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
    },
  },
  {
    id: 'slide-45',
    week: 'Digital Marketing',
    title: 'Your Future is Digital, Strategic, and Yours',
    summary: '',
    duration: '10 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    quiz: {
      question: 'Did you understand the lesson?',
      options: ['Yes', 'No', 'Maybe'],
      answer: 'Yes',
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
