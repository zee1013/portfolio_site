// public 폴더의 파일은 import 없이, 루트(/) 기준 문자열 경로로 바로 접근합니다.
const getIconUrl = (filename) => `/assets/skillTool_icon/${filename}`

export const skillIcons = {
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: getIconUrl('tool=figma.png'),
  },
  photoshop: {
    id: 'photoshop',
    name: 'Photoshop',
    icon: getIconUrl('tool=photoshop.png'),
  },
  illustrator: {
    id: 'illustrator',
    name: 'Illustrator',
    icon: getIconUrl('tool=illust.png'),
  },
  cinema4d: {
    id: 'cinema4d',
    name: 'Cinema 4D',
    icon: getIconUrl('tool=cinema4d.png'),
  },
  octane: {
    id: 'octane',
    name: 'Octane Render',
    icon: getIconUrl('tool=octane.png'),
  },
  html: {
    id: 'html',
    name: 'HTML',
    icon: getIconUrl('tool=html.png'),
  },
  css: {
    id: 'css',
    name: 'CSS',
    icon: getIconUrl('tool=css.png'),
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: getIconUrl('tool=javascript.png'),
  },
  jquery: {
    id: 'jquery',
    name: 'jQuery',
    icon: getIconUrl('tool=jquery.png'),
  },
  react: {
    id: 'react',
    name: 'React',
    icon: getIconUrl('tool=react.png'),
  },
  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: getIconUrl('tool=chatgpt.png'),
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    icon: getIconUrl('tool=gemini.png'),
  },
  claude: {
    id: 'claude',
    name: 'Claude',
    icon: getIconUrl('tool=claude.png'),
  },
}

export const skillGroups = [
  {
    id: 'design',
    label: 'DESIGN',
    skills: [
      skillIcons.figma,
      skillIcons.photoshop,
      skillIcons.illustrator,
      skillIcons.cinema4d,
      skillIcons.octane,
    ],
  },
  {
    id: 'publishing',
    label: 'PUBLISHING',
    skills: [
      skillIcons.html,
      skillIcons.css,
      skillIcons.javascript,
      skillIcons.jquery,
      skillIcons.react,
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    skills: [skillIcons.chatgpt, skillIcons.gemini, skillIcons.claude],
  },
]

export const getSkillIcons = (ids = []) => {
  return ids.map((id) => skillIcons[id]).filter(Boolean)
}