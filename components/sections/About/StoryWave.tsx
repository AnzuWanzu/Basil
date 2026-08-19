interface StoryWaveProps {
  flip?: boolean;
}

const VIEWBOX = "0 0 1440 320";

const TOP_PATH =
  "M0,96L60,122.7C120,149,240,203,360,224C480,245,600,235,720,208C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
const BOTTOM_PATH =
  "M0,96L60,122.7C120,149,240,203,360,224C480,245,600,235,720,208C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

export function StoryWave({ flip = false }: StoryWaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
      className="block h-12 w-full text-primary-hover sm:h-16 md:h-24"
    >
      <path fill="currentColor" d={flip ? BOTTOM_PATH : TOP_PATH} />
    </svg>
  );
}
