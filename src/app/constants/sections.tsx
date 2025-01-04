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
    text: "Meet Oğuzhan Dere, a full-stack software developer who thrives on bringing imaginative ideas to life. Over the years, from streamlining enterprise applications to developing personalized digital experiences, I’ve built solutions that merge technical innovation with creativity. For me, coding is more of a way to craft and share the concepts I love envisioning, transforming abstract ideas into impactful and tangible results.",
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
    text: "This page is my digital portfolio, a space where I showcase my personal work and projects while offering a window into who I am. Beyond the technical, it’s a reflection of my ideas, passions, and the journey that has shaped me. By sharing my story and creations, I hope to connect with others and offer a deeper understanding of the person behind the work.",
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
    text: 'I believe in the interconnectedness of creativity, where all forms of art share underlying patterns of emotions and feelings. My vision is to explore this concept, which I call the "singularity of art", by bridging the gap between different artistic expressions and uncovering the threads that connect them. Additionally, I approach every project with a commitment to excellence. For me, it’s more about crafting maintainable and elegant solutions rather than merely finishing them. This dedication reflects my belief that true fulfillment lies in doing meaningful work to its fullest potential.',
    img: AboutIdealsIcon,
    reversed: false,
    wave: {
      color: "primary.main",
      backgroundColor: "secondary.main",
      selectedWave: 2,
    },
  },
  {
    title: "Life Beyond Work",
    icon: <FavoriteIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    text: "I find joy in exploring new ways to appreciate life and discovering what truly resonates with me. As a drummer with an interest in music production, I’m deeply connected to the rhythm and flow of creativity, which also fuels my passion for dancing. Other than these, I cherish moments spent café-hopping with friends, engaging in meaningful conversations about life’s perspectives and shared experiences. These pursuits not only bring me happiness but also shape the way I view and engage with the world.",
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
