import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AboutHobbiesIcon from "../../../public/assets/about/about_hobbies.svg";
import AboutMeIcon from "../../../public/assets/about/about_me.svg";
import AboutPurposeIcon from "../../../public/assets/about/about_purpose.svg";
import AboutIdealsIcon from "../../../public/assets/about/about_ideals.svg";
import VisitWebsite from "@/components/VisitWebsite";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import InnerNavigateButton from "@/components/InnerNavigateButton";

export const AboutSections = [
  {
    title: "Who I Am",
    icon: <EmojiPeopleIcon fontSize="large" sx={{ color: "primary.main" }} />,
    text: "Hi, I’m Oguzhan Dere, a software developer passionate about creating user-friendly applications and exploring the endless possibilities of technology.",
    img: AboutMeIcon,
    reversed: false,
    wave: {
      color: "primary.main",
      backgroundColor: "secondary.main",
      selectedWave: 0,
    },
  },
  {
    title: "Purpose of This Page",
    icon: <PublicIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    text: "This page serves as my digital portfolio and a place where I share my thoughts, hobbies, and aspirations. It's a glimpse into my journey and what inspires me.",
    img: AboutPurposeIcon,
    reversed: true,
    wave: {
      color: "secondary.main",
      backgroundColor: "primary.main",
      selectedWave: 1,
    },
  },
  {
    title: "Ideals and Vision",
    icon: (
      <TipsAndUpdatesIcon fontSize="large" sx={{ color: "primary.main" }} />
    ),
    text: "I believe in continuous learning, creating a positive impact through technology, and fostering meaningful connections. My goal is to contribute to innovative solutions that make life better.",
    img: AboutIdealsIcon,
    reversed: false,
    wave: {
      color: "primary.main",
      backgroundColor: "secondary.main",
      selectedWave: 2,
    },
  },
  {
    title: "Hobbies",
    icon: <FavoriteIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    text: "In my free time, I enjoy creating music, dancing to my favorite tunes, and exploring new creative outlets. These activities fuel my imagination and keep me energized.",
    img: AboutHobbiesIcon,
    reversed: true,
    wave: null, // No wave after this section
  },
];

export const ProjectSections = [
  {
    title: "Keddy",
    text: 'Keddy is an advanced music personalization application that tailors recommendations and filtering to your preferences. Simply share how you feel to get personalized tracks and playlists, or curate and filter your favorite music using customizable presets. You can also host music sessions with friends by selecting your preferred "Vibes" for a shared listening experience.',
    component: (
      <VisitWebsite
        url="https://dev.keddy.dereoprojects.com"
        label="Visit Website"
      />
    ),
    reversed: false,
    wave: {
      color: "primary.main",
      backgroundColor: "secondary.main",
      selectedWave: 0,
    },
  },
  {
    title: "Your Next Idea",
    icon: <LightbulbIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    component: (
      <InnerNavigateButton
        reversed
        navigate="/contact"
        label="Contact Now"
        icon={<LightbulbIcon></LightbulbIcon>}
      />
    ),
    text: "Have an innovative idea you’re eager to bring to life? If you believe in its potential and are ready to take the next step toward turning it into reality, I’d be delighted to collaborate. Let’s discuss how we can transform your vision into a successful project. Feel free to reach out and connect!",
    reversed: true,
    wave: null,
  },
];
