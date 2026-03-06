// ==================================================
//  VAKTIFY — Social Networking Application
//  A cosmic fusion of Twitter meets Reddit
// ==================================================
import './style.css';

// ─── State Management ─────────────────────────────
const STATE = {
  currentPage: 'landing',
  user: null,
  posts: [],
  contacts: [],
  mascotStep: 0,
};

// ─── Mock Data ────────────────────────────────────
const MOCK_CONTACTS = [
  { id: 1, name: 'Arjun Mehta', username: '@arjun_m', avatar: 'A', invited: false },
  { id: 2, name: 'Priya Sharma', username: '@priya_sh', avatar: 'P', invited: false },
  { id: 3, name: 'Rohit Verma', username: '@rohit_v', avatar: 'R', invited: false },
  { id: 4, name: 'Sneha Kapoor', username: '@sneha_k', avatar: 'S', invited: false },
  { id: 5, name: 'Vikram Singh', username: '@vikram_s', avatar: 'V', invited: false },
  { id: 6, name: 'Ananya Das', username: '@ananya_d', avatar: 'A', invited: false },
  { id: 7, name: 'Kabir Patel', username: '@kabir_p', avatar: 'K', invited: false },
  { id: 8, name: 'Meera Joshi', username: '@meera_j', avatar: 'M', invited: false },
];

const MOCK_POSTS = [
  {
    id: 1,
    author: 'Arjun Mehta',
    handle: '@arjun_m',
    avatar: 'A',
    userType: 'public',
    topic: 'v/technology',
    content: 'Just built a neural network from scratch using nothing but JavaScript! The future of web-based AI is incredible 🚀 #MachineLearning #WebDev',
    time: '2h',
    likes: 342,
    comments: 47,
    shares: 89,
    upvotes: 456,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: [
      { author: 'Priya Sharma', avatar: 'P', text: 'This is amazing! Can you share the repo?', time: '1h' },
      { author: 'Vikram Singh', avatar: 'V', text: 'How does it handle backpropagation?', time: '45m' },
    ]
  },
  {
    id: 2,
    author: 'Anonymous',
    handle: '@anon_user',
    avatar: '👻',
    userType: 'anonymous',
    topic: 'v/confessions',
    content: 'Sometimes I pretend to understand complex math concepts in meetings just to look smart. Anyone else? 😅',
    time: '4h',
    likes: 1205,
    comments: 234,
    shares: 156,
    upvotes: 2341,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: [
      { author: 'Sneha Kapoor', avatar: 'S', text: 'We ALL do that 😂', time: '3h' },
    ]
  },
  {
    id: 3,
    author: 'Priya Sharma',
    handle: '@priya_sh',
    avatar: 'P',
    userType: 'public',
    topic: 'v/design',
    content: 'Hot take: Glassmorphism is NOT dead. It just evolved. The new trend is "space glass" — frosted panels with cosmic gradients behind them. Check out my latest exploration ✨\n\nWhat do you all think?',
    time: '6h',
    likes: 876,
    comments: 123,
    shares: 234,
    upvotes: 1567,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: [
      { author: 'Arjun Mehta', avatar: 'A', text: 'Totally agree! The depth effect is stunning.', time: '5h' },
      { author: 'Kabir Patel', avatar: 'K', text: 'Can you share a tutorial?', time: '4h' },
      { author: 'Meera Joshi', avatar: 'M', text: 'Love this aesthetic! 💜', time: '3h' },
    ]
  },
  {
    id: 4,
    author: 'Sneha Kapoor',
    handle: '@sneha_k',
    avatar: 'S',
    userType: 'public',
    topic: 'v/science',
    content: 'Did you know? The Voyager 1 spacecraft is still sending data from 24 BILLION km away. Launched in 1977 and still going strong. Humanity\'s farthest creation. 🌌\n\n#Space #Science #Voyager',
    time: '8h',
    likes: 2341,
    comments: 189,
    shares: 567,
    upvotes: 4521,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: []
  },
  {
    id: 5,
    author: 'Anonymous',
    handle: '@anon_user2',
    avatar: '🎭',
    userType: 'anonymous',
    topic: 'v/thoughts',
    content: 'Unpopular opinion: Working from home has made me more productive but also more lonely. The office may have been distracting, but at least it felt alive.',
    time: '12h',
    likes: 567,
    comments: 145,
    shares: 78,
    upvotes: 890,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: []
  },
  {
    id: 6,
    author: 'Vikram Singh',
    handle: '@vikram_s',
    avatar: 'V',
    userType: 'public',
    topic: 'v/gaming',
    content: 'Just finished a 72-hour game jam and built a space shooter using only CSS animations and vanilla JS. No canvas, no WebGL. Pure DOM manipulation! 🎮\n\nThread below with the making-of 👇',
    time: '1d',
    likes: 1890,
    comments: 312,
    shares: 445,
    upvotes: 3200,
    liked: false,
    shared: false,
    upvoted: false,
    downvoted: false,
    commentList: [
      { author: 'Rohit Verma', avatar: 'R', text: 'This is insane! How did you handle collision detection?', time: '20h' },
    ]
  },
];

const TRENDING = [
  { category: 'Technology · Trending', topic: '#WebAssembly', posts: '12.4K posts' },
  { category: 'Science · Trending', topic: 'James Webb Telescope', posts: '8.9K posts' },
  { category: 'Entertainment · Trending', topic: '#IndieGames', posts: '5.2K posts' },
  { category: 'Design · Trending', topic: 'Space Glass UI', posts: '3.7K posts' },
  { category: 'Programming · Trending', topic: '#RustLang', posts: '15.1K posts' },
];

const SUGGESTIONS = [
  { name: 'Kabir Patel', handle: '@kabir_p', avatar: 'K' },
  { name: 'Meera Joshi', handle: '@meera_j', avatar: 'M' },
  { name: 'Rohit Verma', handle: '@rohit_v', avatar: 'R' },
];

// ─── Utility ──────────────────────────────────────
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

function generateStars(count = 100) {
  let html = '<div class="stars">';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 2 + Math.random() * 4;
    const maxOpacity = 0.3 + Math.random() * 0.7;
    const delay = Math.random() * 5;
    const size = 1 + Math.random() * 2;
    html += `<div class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;--duration:${duration}s;--max-opacity:${maxOpacity};animation-delay:${delay}s;"></div>`;
  }
  html += '</div>';
  return html;
}

function showToast(message, type = 'success') {
  let container = $('.toast-container');
  if (!container) {
    const div = document.createElement('div');
    div.className = 'toast-container';
    document.body.appendChild(div);
    container = div;
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `${type === 'success' ? '✅' : 'ℹ️'} ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

// ─── Router ───────────────────────────────────────
function navigate(page) {
  const app = $('#app');
  app.classList.add('page-transition-exit');
  setTimeout(() => {
    STATE.currentPage = page;
    render();
    app.classList.remove('page-transition-exit');
    app.classList.add('page-transition-enter');
    requestAnimationFrame(() => {
      app.classList.remove('page-transition-enter');
      app.classList.add('page-transition-active');
      setTimeout(() => app.classList.remove('page-transition-active'), 400);
    });
  }, 250);
}

// ─── Render ───────────────────────────────────────
function render() {
  const app = $('#app');
  switch (STATE.currentPage) {
    case 'landing':
      app.innerHTML = renderLanding();
      initLanding();
      break;
    case 'profile-setup':
      app.innerHTML = renderProfileSetup();
      initProfileSetup();
      break;
    case 'invite':
      app.innerHTML = renderInvite();
      initInvite();
      break;
    case 'feed':
      app.innerHTML = renderFeed();
      initFeed();
      break;
    default:
      app.innerHTML = renderLanding();
      initLanding();
  }
}

// ─── Mascot HTML ──────────────────────────────────
function renderMascot(speech = '', position = 'right') {
  const posStyle = position === 'right'
    ? 'bottom: 30px; right: 30px;'
    : position === 'left'
      ? 'bottom: 30px; left: 30px;'
      : 'bottom: 30px; left: 50%; transform: translateX(-50%);';

  const speechBubble = speech
    ? `<div class="mascot-speech" style="${position === 'right' ? 'right: 0; bottom: 170px;' : 'left: 0; bottom: 170px;'}">${speech}</div>`
    : '';

  return `
    <div class="mascot-container" style="${posStyle}">
      ${speechBubble}
      <div class="mascot">
        <div class="mascot-hair">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="mascot-body">
          <div class="mascot-goggles">
            <div class="mascot-eye"><div class="mascot-pupil"></div></div>
            <div class="mascot-eye"><div class="mascot-pupil"></div></div>
          </div>
          <div class="mascot-mouth"></div>
          <div class="mascot-overalls">
            <div class="mascot-pocket"></div>
          </div>
        </div>
        <div class="mascot-arm mascot-arm-left"></div>
        <div class="mascot-arm mascot-arm-right"></div>
        <div class="mascot-feet">
          <div class="mascot-foot"></div>
          <div class="mascot-foot"></div>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════
//  LANDING PAGE
// ═══════════════════════════════════════════════════
function renderLanding() {
  return `
    <div class="cosmic-bg"></div>
    ${generateStars(120)}
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <div class="landing">
      <nav class="landing-nav fade-in">
        <div class="logo">
          <div class="logo-icon">V</div>
          <span class="logo-text">Vaktify</span>
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-ghost" id="btn-login">Log In</button>
          <button class="btn btn-primary btn-sm" id="btn-signup">Sign Up</button>
        </div>
      </nav>

      <div class="landing-hero">
        <div class="hero-content">
          <h1 class="slide-up">Where Voices<br/>Orbit Together</h1>
          <p class="slide-up" style="animation-delay: 0.1s;">
            A cosmic social experience blending the best of microblogging and community threads. 
            Share your thoughts, join discussions, and orbit with your tribe.
          </p>
          <div class="hero-actions slide-up" style="animation-delay: 0.2s;">
            <button class="btn btn-primary btn-lg" id="btn-hero-join">
              🚀 Join the Orbit
            </button>
            <button class="btn btn-secondary btn-lg" id="btn-hero-explore">
              ✨ Explore
            </button>
          </div>
          <div class="hero-features slide-up" style="animation-delay: 0.3s;">
            <div class="hero-feature">
              <div class="hero-feature-icon">💬</div>
              <span>Threads & Discussions</span>
            </div>
            <div class="hero-feature">
              <div class="hero-feature-icon">🌐</div>
              <span>Topic Communities</span>
            </div>
            <div class="hero-feature">
              <div class="hero-feature-icon">👻</div>
              <span>Anonymous Mode</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderMascot('Hey there! 👋 Welcome to Vaktify! Tap "Join the Orbit" to start your cosmic journey! 🌟', 'right')}
  `;
}

function initLanding() {
  const loginBtn = $('#btn-login');
  const signupBtn = $('#btn-signup');
  const heroJoin = $('#btn-hero-join');
  const heroExplore = $('#btn-hero-explore');

  [loginBtn, heroExplore].forEach(btn => {
    if (btn) btn.addEventListener('click', () => showAuthModal('login'));
  });

  [signupBtn, heroJoin].forEach(btn => {
    if (btn) btn.addEventListener('click', () => showAuthModal('signup'));
  });
}

// ─── Auth Modal ───────────────────────────────────
function showAuthModal(mode = 'signup') {
  const existing = $('.modal-overlay');
  if (existing) existing.remove();

  const isSignup = mode === 'signup';

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal glass" style="position: relative;">
      <button class="modal-close" id="modal-close">✕</button>
      <h2>${isSignup ? '🚀 Join Vaktify' : '👋 Welcome Back'}</h2>
      <p>${isSignup ? 'Start your cosmic social journey' : 'Log back into your orbit'}</p>

      ${isSignup ? `
        <div class="input-group">
          <label>Full Name</label>
          <input type="text" class="input-field" id="auth-name" placeholder="Your cosmic name" />
        </div>
      ` : ''}

      <div class="input-group">
        <label>Email</label>
        <input type="email" class="input-field" id="auth-email" placeholder="you@cosmos.io" />
      </div>

      <div class="input-group">
        <label>Password</label>
        <input type="password" class="input-field" id="auth-password" placeholder="••••••••" />
      </div>

      ${isSignup ? `
        <div class="input-group">
          <label>Choose your identity</label>
          <div class="user-type-selector">
            <div class="user-type-option selected" data-type="public" id="type-public">
              <div class="icon">🌍</div>
              <span class="label">Public</span>
              <span class="desc">Full access • Like, Share, Comment</span>
            </div>
            <div class="user-type-option" data-type="anonymous" id="type-anonymous">
              <div class="icon">👻</div>
              <span class="label">Anonymous</span>
              <span class="desc">Hidden profile • Like & Share only</span>
            </div>
          </div>
        </div>
      ` : ''}

      <button class="btn btn-primary" style="width: 100%; margin-top: 8px;" id="auth-submit">
        ${isSignup ? '🚀 Launch Into Orbit' : '✨ Log In'}
      </button>

      <div class="auth-toggle">
        ${isSignup
      ? 'Already orbiting? <a id="auth-switch">Log In</a>'
      : 'New to the cosmos? <a id="auth-switch">Sign Up</a>'
    }
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close
  $('#modal-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  // Switch auth mode
  $('#auth-switch').addEventListener('click', () => {
    overlay.remove();
    showAuthModal(isSignup ? 'login' : 'signup');
  });

  // User type selection
  if (isSignup) {
    const typeOptions = overlay.querySelectorAll('.user-type-option');
    typeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        typeOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  }

  // Submit
  $('#auth-submit').addEventListener('click', () => {
    const email = $('#auth-email').value.trim();
    const password = $('#auth-password').value.trim();

    if (!email || !password) {
      showToast('Please fill in all fields', 'info');
      return;
    }

    if (isSignup) {
      const name = $('#auth-name').value.trim();
      if (!name) {
        showToast('Please enter your name', 'info');
        return;
      }
      const selectedType = overlay.querySelector('.user-type-option.selected');
      const userType = selectedType ? selectedType.dataset.type : 'public';

      STATE.user = {
        name,
        email,
        userType,
        handle: '@' + name.toLowerCase().replace(/\s+/g, '_'),
        avatar: name.charAt(0).toUpperCase(),
        bio: '',
        followers: 0,
        following: 0,
        posts: 0,
      };
    } else {
      STATE.user = {
        name: 'Returning User',
        email,
        userType: 'public',
        handle: '@returning_user',
        avatar: 'R',
        bio: 'Back in orbit! 🌟',
        followers: 128,
        following: 256,
        posts: 42,
      };
    }

    overlay.remove();
    showToast(`Welcome to Vaktify, ${STATE.user.name}! 🌟`);

    if (isSignup) {
      navigate('profile-setup');
    } else {
      navigate('feed');
    }
  });
}

// ═══════════════════════════════════════════════════
//  PROFILE SETUP PAGE
// ═══════════════════════════════════════════════════
function renderProfileSetup() {
  return `
    <div class="cosmic-bg"></div>
    ${generateStars(80)}

    <div class="profile-setup">
      <div class="profile-setup-card glass slide-up">
        <h1>🎨 Set Up Your Profile</h1>
        <p>Let the cosmos know who you are${STATE.user?.userType === 'anonymous' ? ' (only visible to you)' : ''}</p>

        <div class="avatar-upload">
          <div class="avatar-upload-circle" id="avatar-upload-trigger">
            ${STATE.user?.avatar || '📷'}
          </div>
          <div class="avatar-upload-text">
            <strong>Upload avatar</strong>
            Click to choose a profile picture
          </div>
        </div>

        <div class="input-group">
          <label>Display Name</label>
          <input type="text" class="input-field" id="setup-name" value="${STATE.user?.name || ''}" placeholder="Your display name" />
        </div>

        <div class="input-group">
          <label>Username</label>
          <input type="text" class="input-field" id="setup-handle" value="${STATE.user?.handle || ''}" placeholder="@username" />
        </div>

        <div class="input-group">
          <label>Bio</label>
          <textarea class="input-field" id="setup-bio" placeholder="Tell the universe about yourself..."></textarea>
        </div>

        <div class="input-group">
          <label>Location (optional)</label>
          <input type="text" class="input-field" id="setup-location" placeholder="Earth, Milky Way 🌍" />
        </div>

        ${STATE.user?.userType === 'anonymous' ? `
          <div style="padding: 14px; border-radius: var(--radius-md); background: rgba(244,114,182,0.08); border: 1px solid rgba(244,114,182,0.2); margin-bottom: 20px; font-size: 0.85rem; color: var(--accent-tertiary);">
            👻 Anonymous mode is ON — your profile won't be visible to others. You can like and share posts but commenting is restricted.
          </div>
        ` : ''}

        <button class="btn btn-primary btn-lg" style="width: 100%;" id="setup-continue">
          Continue →
        </button>
      </div>
    </div>

    ${renderMascot('Almost there! Fill in your details and let\'s blast off! 🚀', 'right')}
  `;
}

function initProfileSetup() {
  const continueBtn = $('#setup-continue');
  continueBtn.addEventListener('click', () => {
    const name = $('#setup-name').value.trim();
    const handle = $('#setup-handle').value.trim();
    const bio = $('#setup-bio').value.trim();

    if (!name) {
      showToast('Please enter a display name', 'info');
      return;
    }

    STATE.user.name = name;
    STATE.user.handle = handle || STATE.user.handle;
    STATE.user.bio = bio;
    STATE.user.avatar = name.charAt(0).toUpperCase();

    showToast('Profile saved! 🎉');
    navigate('invite');
  });
}

// ═══════════════════════════════════════════════════
//  INVITE CONTACTS PAGE
// ═══════════════════════════════════════════════════
function renderInvite() {
  STATE.contacts = JSON.parse(JSON.stringify(MOCK_CONTACTS));

  return `
    <div class="cosmic-bg"></div>
    ${generateStars(80)}

    <div class="invite-page">
      <div class="invite-card glass slide-up">
        <h1>📬 Invite Your Crew</h1>
        <p>Bring your friends into the orbit! Send them an invite to Vaktify.</p>

        <div class="invite-search">
          <span class="search-icon">🔍</span>
          <input type="text" class="input-field" id="invite-search-input" placeholder="Search contacts..." style="padding-left: 44px;" />
        </div>

        <div class="contact-list" id="contact-list">
          ${renderContactList(STATE.contacts)}
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-secondary" style="flex: 1;" id="invite-skip">
            Skip for now
          </button>
          <button class="btn btn-primary" style="flex: 1;" id="invite-continue">
            Continue →
          </button>
        </div>
      </div>
    </div>

    ${renderMascot('Invite your friends to make it more fun! Or skip if you\'re shy 😏', 'right')}
  `;
}

function renderContactList(contacts) {
  return contacts.map(c => `
    <div class="contact-item" data-id="${c.id}">
      <div class="avatar avatar-sm" style="background: ${getAvatarGradient(c.avatar)}">${c.avatar}</div>
      <div class="contact-info">
        <div class="contact-name">${c.name}</div>
        <div class="contact-username">${c.username}</div>
      </div>
      <button class="invite-btn ${c.invited ? 'invited' : ''}" data-id="${c.id}">
        ${c.invited ? '✓ Invited' : '+ Invite'}
      </button>
    </div>
  `).join('');
}

function getAvatarGradient(letter) {
  const colors = {
    'A': 'linear-gradient(135deg, #977DFF, #38BDF8)',
    'P': 'linear-gradient(135deg, #F472B6, #A78BFA)',
    'R': 'linear-gradient(135deg, #34D399, #38BDF8)',
    'S': 'linear-gradient(135deg, #FBBF24, #F472B6)',
    'V': 'linear-gradient(135deg, #977DFF, #F472B6)',
    'K': 'linear-gradient(135deg, #38BDF8, #34D399)',
    'M': 'linear-gradient(135deg, #A78BFA, #FBBF24)',
  };
  return colors[letter] || 'var(--gradient-brand)';
}

function initInvite() {
  const searchInput = $('#invite-search-input');
  const contactListEl = $('#contact-list');
  const skipBtn = $('#invite-skip');
  const continueBtn = $('#invite-continue');

  // Search
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = STATE.contacts.filter(c =>
      c.name.toLowerCase().includes(q) || c.username.toLowerCase().includes(q)
    );
    contactListEl.innerHTML = renderContactList(filtered);
    bindInviteButtons();
  });

  bindInviteButtons();

  function bindInviteButtons() {
    contactListEl.querySelectorAll('.invite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const contact = STATE.contacts.find(c => c.id === id);
        if (contact) {
          contact.invited = !contact.invited;
          btn.classList.toggle('invited');
          btn.textContent = contact.invited ? '✓ Invited' : '+ Invite';
          if (contact.invited) {
            showToast(`Invite sent to ${contact.name}! 📬`);
          }
        }
      });
    });
  }

  skipBtn.addEventListener('click', () => navigate('feed'));
  continueBtn.addEventListener('click', () => {
    const invited = STATE.contacts.filter(c => c.invited).length;
    if (invited > 0) {
      showToast(`${invited} invite${invited > 1 ? 's' : ''} sent! 🎉`);
    }
    navigate('feed');
  });
}

// ═══════════════════════════════════════════════════
//  MAIN FEED PAGE
// ═══════════════════════════════════════════════════
function renderFeed() {
  STATE.posts = JSON.parse(JSON.stringify(MOCK_POSTS));
  const isAnonymous = STATE.user?.userType === 'anonymous';

  return `
    <div class="cosmic-bg"></div>

    <div class="feed-layout">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="logo">
          <div class="logo-icon">V</div>
          <span class="logo-text">Vaktify</span>
        </div>

        <div class="sidebar-nav">
          <button class="nav-item active" data-page="home" id="nav-home">
            <span class="nav-icon">🏠</span>
            <span class="nav-label">Home</span>
          </button>
          <button class="nav-item" data-page="explore" id="nav-explore">
            <span class="nav-icon">🔍</span>
            <span class="nav-label">Explore</span>
          </button>
          <button class="nav-item" data-page="notifications" id="nav-notifications">
            <span class="nav-icon">🔔</span>
            <span class="nav-label">Notifications</span>
            <span class="notification-badge-dot"></span>
          </button>
          <button class="nav-item" data-page="messages" id="nav-messages">
            <span class="nav-icon">✉️</span>
            <span class="nav-label">Messages</span>
          </button>
          <button class="nav-item" data-page="communities" id="nav-communities">
            <span class="nav-icon">🌐</span>
            <span class="nav-label">Communities</span>
          </button>
          <button class="nav-item" data-page="profile" id="nav-profile">
            <span class="nav-icon">👤</span>
            <span class="nav-label">Profile</span>
          </button>
        </div>

        <div class="sidebar-profile" id="sidebar-profile-btn">
          <div class="avatar avatar-sm" style="background: ${getAvatarGradient(STATE.user?.avatar)}">${STATE.user?.avatar || 'U'}</div>
          <div class="profile-info">
            <div class="profile-name">${STATE.user?.name || 'User'}</div>
            <div class="profile-handle">${STATE.user?.handle || '@user'}</div>
          </div>
          ${isAnonymous ? '<span class="badge badge-anonymous" style="font-size:0.65rem;">👻 Anon</span>' : ''}
        </div>
      </aside>

      <!-- Main Feed -->
      <main class="feed-main" id="feed-main">
        <div class="feed-header">
          <h1>Home</h1>
        </div>
 
<div class="search-container glass slide-up" style="margin: 20px 24px 0; padding: 10px; border-radius: var(--radius-md);">
    <div style="position: relative; display: flex; align-items: center;">
        <span style="position: absolute; left: 15px; font-size: 1.2rem; pointer-events: none;">🔍</span>
        <input type="text" id="global-search" class="input-field" 
               placeholder="Search orbits, authors, or #hashtags..." 
               style="padding-left: 45px; width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);">
    </div>
</div>
        <div class="feed-tabs">
          <button class="feed-tab active" data-tab="foryou" id="tab-foryou">For You</button>
          <button class="feed-tab" data-tab="following" id="tab-following">Following</button>
          <button class="feed-tab" data-tab="trending" id="tab-trending">Trending</button>
          
        </div>

        ${!isAnonymous ? `
          <div class="compose-box">
            <div class="avatar" style="background: ${getAvatarGradient(STATE.user?.avatar)}">${STATE.user?.avatar || 'U'}</div>
            <div class="compose-input">
              <textarea class="compose-textarea" id="compose-text" placeholder="What's on your mind? Share it with the cosmos..."></textarea>
              


<div class="compose-input">
    <div id="image-preview-wrapper" style="display: none; margin: 10px 0; position: relative; border-radius: var(--radius-md); overflow: hidden; border: 1px solid rgba(151, 125, 255, 0.3);">
        <img id="image-preview" src="" style="width: 100%; max-height: 300px; object-fit: cover; display: block;">
        <button id="remove-img-btn" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-weight: bold;">✕</button>
    </div>

    <input type="file" id="post-image-input" accept="image/*" style="display: none;">

</div>

              <div class="compose-actions">
                <div class="compose-tools">
                <button class="compose-tool-btn" id="trigger-img-upload" title="Upload Image">🖼️</button>
                  <button class="compose-tool-btn" title="GIF">🎞️</button>
                  <button class="compose-tool-btn" title="Poll">📊</button>
                  <button class="compose-tool-btn" title="Emoji">😊</button>
                </div>
                <button class="btn btn-primary btn-sm" id="btn-post">Post</button>
              </div>
            </div>
          </div>
        ` : `
          <div style="padding: 20px 24px; border-bottom: 1px solid var(--border-subtle); text-align: center;">
            <div style="padding: 16px; background: rgba(244,114,182,0.06); border-radius: var(--radius-md); border: 1px solid rgba(244,114,182,0.15); color: var(--text-secondary); font-size: 0.9rem;">
              👻 You're in Anonymous mode — you can like & share posts but commenting and posting are restricted.
            </div>
          </div>
        `}

        <div id="posts-container">
          ${renderPosts()}
        </div>
      </main>

      <!-- Right Sidebar -->
      <aside class="right-sidebar">
        <div class="trending-section glass" style="border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px;">
          <h3>🔥 Trending</h3>
          ${TRENDING.map(t => `
            <div class="trending-item">
              <div class="trending-category">${t.category}</div>
              <div class="trending-topic">${t.topic}</div>
              <div class="trending-posts">${t.posts}</div>
            </div>
          `).join('')}
        </div>

        <div class="who-to-follow glass" style="border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px;">
          <h3>✨ Who to Follow</h3>
          ${SUGGESTIONS.map(s => `
            <div class="follow-suggestion">
              <div class="avatar avatar-sm" style="background: ${getAvatarGradient(s.avatar)}">${s.avatar}</div>
              <div class="follow-info">
                <div class="follow-name">${s.name}</div>
                <div class="follow-handle">${s.handle}</div>
              </div>
              <button class="follow-btn">Follow</button>
            </div>
          `).join('')}
        </div>

        <div style="padding: 12px; font-size: 0.75rem; color: var(--text-muted); line-height: 1.6;">
          <a href="#">Terms</a> · <a href="#">Privacy</a> · <a href="#">Cookies</a><br/>
          © 2026 Vaktify. All rights reserved.
        </div>
      </aside>
    </div>
  `;
}
// main.js -> Line 862 ke niche paste karein
function renderMessagesPage() {
    return `
        <div class="messages-container slide-up">
            <header class="messages-header">
                <div class="header-top">
                    <h2>Messages</h2>
                    <button class="icon-btn">📝</button>
                </div>
                <div class="search-bar-mini glass">
                    <span>🔍</span>
                    <input type="text" placeholder="Search messages...">
                </div>
            </header>

            <div class="notes-row">
                <div class="note-item">
                    <div class="note-avatar your-note">
                        <div class="note-bubble">Your note</div>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aman" alt="Me">
                    </div>
                    <span>Your note</span>
                </div>
                ${['Ram', 'Sneha', 'Litesh'].map(name => `
                    <div class="note-item">
                        <div class="note-avatar has-story">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${name}" alt="${name}">
                        </div>
                        <span>${name}</span>
                    </div>
                `).join('')}
            </div>

            <div class="chat-list">
                <div class="chat-item unread">
                    <div class="avatar">RP</div>
                    <div class="chat-info">
                        <span class="chat-name">Ramveer Pal</span>
                        <span class="chat-msg">Sent a reel by career_path • 2h</span>
                    </div>
                    <button class="camera-btn">📷</button>
                </div>
                <div class="chat-item">
                    <div class="avatar" style="background: var(--gradient-brand);">B</div>
                    <div class="chat-info">
                        <span class="chat-name">Bhoomii</span>
                        <span class="chat-msg">Sent a reel by lonelyl0 • 3d</span>
                    </div>
                    <button class="camera-btn">📷</button>
                </div>
            </div>
        </div>
    `;
}

function renderProfilePage() {
    // User data placeholder
    const user = {
        name: 'Returning User',
        handle: '@returning_user',
        avatar: 'R',
        bio: 'Cosmic Explorer 🚀 | UI/UX Enthusiast | Building the future of Vaktify.',
        posts: 42,
        followers: '1.2K',
        following: 560
    };

    return `
        <div class="profile-container slide-up">
            <header class="profile-header glass">
                <div class="profile-avatar-section">
                    <div class="avatar avatar-xl" style="background: var(--gradient-brand); font-size: 2.5rem;">${user.avatar}</div>
                </div>
                
                <section class="profile-info">
                    <div class="profile-title-row">
                        <h2 class="profile-handle">${user.handle.replace('@', '')}</h2>
                        <button class="btn btn-secondary btn-sm">Edit Profile</button>
                        <button class="btn btn-ghost">⚙️</button>
                    </div>
                    
                    <div class="profile-stats">
                        <span><strong>${user.posts}</strong> posts</span>
                        <span><strong>${user.followers}</strong> followers</span>
                        <span><strong>${user.following}</strong> following</span>
                    </div>
                    
                    <div class="profile-bio-content">
                        <span class="profile-full-name">${user.name}</span>
                        <p class="bio-text">${user.bio}</p>
                    </div>
                </section>
            </header>

            <div class="profile-tabs-nav">
                <button class="profile-tab active">🔳 POSTS</button>
                <button class="profile-tab">🎬 REELS</button>
                <button class="profile-tab">🏷️ TAGGED</button>
            </div>

            <div class="posts-grid-layout">
                ${[1, 2, 3, 4, 5, 6].map(i => `
                    <div class="grid-post-item glass">
                        <div class="post-overlay">
                            <span>❤️ 150</span>
                            <span>💬 24</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderPosts() {
  const isAnonymous = STATE.user?.userType === 'anonymous';

  return STATE.posts.map(post => `
    <div class="post-card" data-post-id="${post.id}" id="post-${post.id}">
      <div class="post-header">
        <div class="vote-column">
          <button class="vote-btn ${post.upvoted ? 'upvoted' : ''}" data-action="upvote" data-id="${post.id}" title="Upvote">▲</button>
          <span class="vote-count" id="vote-count-${post.id}">${formatNumber(post.upvotes)}</span>
          <button class="vote-btn ${post.downvoted ? 'downvoted' : ''}" data-action="downvote" data-id="${post.id}" title="Downvote">▼</button>
        </div>
        <div class="avatar" style="background: ${post.userType === 'anonymous' ? 'linear-gradient(135deg, #F472B6, #A78BFA)' : getAvatarGradient(post.avatar)}">
          ${post.avatar}
        </div>
        <div class="post-body">
          <div class="post-meta">
            <span class="post-author">${post.author}</span>
            ${post.userType === 'anonymous' ? '<span class="badge badge-anonymous">👻 Anonymous</span>' : ''}
            <span class="post-handle">${post.handle}</span>
            <span class="post-time">· ${post.time}</span>
          </div>
          <div style="margin-bottom: 8px;">
            <span class="post-topic">${post.topic}</span>
          </div>
          <div class="post-content">${formatPostContent(post.content)}</div>
          <div class="post-actions">
            <button class="post-action comment" data-action="comment" data-id="${post.id}" ${isAnonymous ? 'title="Comments are restricted for anonymous users"' : ''}>
              <span class="action-icon">💬</span>
              <span>${formatNumber(post.comments)}</span>
            </button>
            <button class="post-action share ${post.shared ? 'active' : ''}" data-action="share" data-id="${post.id}">
              <span class="action-icon">🔄</span>
              <span id="share-count-${post.id}">${formatNumber(post.shares)}</span>
            </button>
            <button class="post-action like ${post.liked ? 'active' : ''}" data-action="like" data-id="${post.id}">
              <span class="action-icon">${post.liked ? '❤️' : '🤍'}</span>
              <span id="like-count-${post.id}">${formatNumber(post.likes)}</span>
            </button>
          </div>
          ${!isAnonymous ? `
            <div class="comment-section" id="comments-${post.id}" style="display: none; margin-top: 16px;">
              <div class="comment-input-wrapper">
                <input type="text" placeholder="Add a comment..." id="comment-input-${post.id}" />
                <button class="btn btn-sm btn-primary" data-comment-submit="${post.id}">Reply</button>
              </div>
              <div id="comment-list-${post.id}">
                ${renderComments(post.commentList)}
              </div>
            </div>
          ` : `
            <div class="comment-section" id="comments-${post.id}" style="display: none; margin-top: 16px;">
              <div class="comment-restricted">
                <div class="lock-icon">🔒</div>
                <div>Commenting is restricted for anonymous users.<br/>Switch to public profile to join the conversation.</div>
              </div>
              <div id="comment-list-${post.id}" style="margin-top: 12px;">
                ${renderComments(post.commentList)}
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

function renderComments(comments) {
  if (!comments || comments.length === 0) return '';
  return comments.map(c => `
    <div class="comment-item">
      <div class="avatar avatar-sm" style="background: ${getAvatarGradient(c.avatar)}">${c.avatar}</div>
      <div class="comment-body">
        <div class="comment-author">${c.author}</div>
        <div class="comment-text">${c.text}</div>
        <div class="comment-time">${c.time} ago</div>
      </div>
    </div>
  `).join('');
}

function formatPostContent(content) {
  return content
    .replace(/#(\w+)/g, '<span class="hashtag">#$1</span>')
    .replace(/\n/g, '<br/>');
}

function initFeed() {
  const isAnonymous = STATE.user?.userType === 'anonymous';

  // Nav items
  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      $$('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showToast(`${item.querySelector('.nav-label')?.textContent || 'Page'} — Coming soon! 🚧`, 'info');
    });
  });

  
// initFeed() ke andar ye logic add karein:
const imgTrigger = document.querySelector('#trigger-img-upload');
const imgInput = document.querySelector('#post-image-input');
const previewWrapper = document.querySelector('#image-preview-wrapper');
const previewImg = document.querySelector('#image-preview');
const removeBtn = document.querySelector('#remove-img-btn');

if (imgTrigger && imgInput) {
    imgTrigger.addEventListener('click', () => imgInput.click());

    imgInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImg.src = event.target.result;
                previewWrapper.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    removeBtn.addEventListener('click', () => {
        imgInput.value = '';
        previewWrapper.style.display = 'none';
        previewImg.src = '';
    });
}




  // Feed tabs
  $$('.feed-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.feed-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Post button
  const postBtn = $('#btn-post');
  if (postBtn) {
    postBtn.addEventListener('click', () => {
      const textarea = $('#compose-text');
      const content = textarea.value.trim();
      if (!content) {
        showToast('Write something first!', 'info');
        return;
      }

      const newPost = {
        id: Date.now(),
        author: STATE.user.name,
        handle: STATE.user.handle,
        avatar: STATE.user.avatar,
        userType: STATE.user.userType,
        topic: 'v/general',
        content,
        time: 'now',
        likes: 0,
        comments: 0,
        shares: 0,
        upvotes: 0,
        liked: false,
        shared: false,
        upvoted: false,
        downvoted: false,
        commentList: [],
      };

      STATE.posts.unshift(newPost);
      textarea.value = '';
      $('#posts-container').innerHTML = renderPosts();
      bindPostActions();
      showToast('Posted successfully! 🚀');
    });
  }

  // Follow buttons
  $$('.follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent === 'Follow') {
        btn.textContent = 'Following';
        btn.style.background = 'var(--accent-primary)';
        btn.style.color = 'white';
        showToast('Followed! ✨');
      } else {
        btn.textContent = 'Follow';
        btn.style.background = 'white';
        btn.style.color = 'var(--bg-primary)';
      }
    });
  });

  bindPostActions();
}

function bindPostActions() {
  const isAnonymous = STATE.user?.userType === 'anonymous';

  // Vote buttons
  $$('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      const post = STATE.posts.find(p => p.id === id);
      if (!post) return;

      if (action === 'upvote') {
        if (post.upvoted) {
          post.upvoted = false;
          post.upvotes--;
        } else {
          post.upvoted = true;
          post.upvotes++;
          if (post.downvoted) {
            post.downvoted = false;
            post.upvotes++;
          }
        }
      } else {
        if (post.downvoted) {
          post.downvoted = false;
          post.upvotes++;
        } else {
          post.downvoted = true;
          post.upvotes--;
          if (post.upvoted) {
            post.upvoted = false;
            post.upvotes--;
          }
        }
      }

      const voteCount = $(`#vote-count-${id}`);
      if (voteCount) voteCount.textContent = formatNumber(post.upvotes);

      // Update button styles
      const postEl = $(`#post-${id}`);
      if (postEl) {
        const upBtn = postEl.querySelector('[data-action="upvote"]');
        const downBtn = postEl.querySelector('[data-action="downvote"]');
        upBtn.classList.toggle('upvoted', post.upvoted);
        downBtn.classList.toggle('downvoted', post.downvoted);
      }
    });
  });

  // Like
  $$('[data-action="like"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const post = STATE.posts.find(p => p.id === id);
      if (!post) return;

      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;

      btn.classList.toggle('active', post.liked);
      btn.querySelector('.action-icon').textContent = post.liked ? '❤️' : '🤍';
      const countEl = $(`#like-count-${id}`);
      if (countEl) countEl.textContent = formatNumber(post.likes);

      if (post.liked) {
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = '', 200);
      }
    });
  });

  // Share
  $$('[data-action="share"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const post = STATE.posts.find(p => p.id === id);
      if (!post) return;

      post.shared = !post.shared;
      post.shares += post.shared ? 1 : -1;

      btn.classList.toggle('active', post.shared);
      const countEl = $(`#share-count-${id}`);
      if (countEl) countEl.textContent = formatNumber(post.shares);

      if (post.shared) showToast('Shared to your orbit! 🔄');
    });
  });

  // Comment toggle
  $$('[data-action="comment"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const commentsSection = $(`#comments-${id}`);
      if (commentsSection) {
        const isVisible = commentsSection.style.display !== 'none';
        commentsSection.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
          commentsSection.classList.add('slide-up');
        }
      }
    });
  });

  // Comment submit (only for public users)
  if (!isAnonymous) {
    $$('[data-comment-submit]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const postId = parseInt(btn.dataset.commentSubmit);
        const input = $(`#comment-input-${postId}`);
        const text = input?.value.trim();
        if (!text) return;

        const post = STATE.posts.find(p => p.id === postId);
        if (!post) return;

        const newComment = {
          author: STATE.user.name,
          avatar: STATE.user.avatar,
          text,
          time: 'just now',
        };

        post.commentList.push(newComment);
        post.comments++;

        const commentList = $(`#comment-list-${postId}`);
        if (commentList) {
          commentList.innerHTML = renderComments(post.commentList);
        }

        input.value = '';
        showToast('Comment added! 💬');
      });
    });
  }
}

// ─── Initialize ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  render();
});
