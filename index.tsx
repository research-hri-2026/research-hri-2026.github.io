import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- From components/Icons.tsx ---

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
}

const PaperIcon: React.FC<IconProps> = ({ className, width = "20", height = "20" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const VideoIcon: React.FC<IconProps> = ({ className, width = "20", height = "20" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const ImageIcon: React.FC<IconProps> = ({ className, width = "24", height = "24" }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
);

const CopyIcon: React.FC<IconProps> = ({ className, width = "16", height = "16" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon: React.FC<IconProps> = ({ className, width = "16", height = "16" }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ChevronUpIcon: React.FC<IconProps> = ({ className, width = "24", height = "24" }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
    </svg>
);


// --- From components/VideoPlaceholder.tsx ---

interface VideoPlaceholderProps {
  text?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ text = "Video Placeholder" }) => {
  return (
    <div className="aspect-video w-full bg-gray-200 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-400 text-gray-600">
      <div className="text-gray-500 mb-2">
        <VideoIcon width="48" height="48" />
      </div>
      <p className="text-xl font-semibold">{text}</p>
      <p className="text-sm mt-1 text-gray-500">// TODO: Replace this div with your &lt;video&gt; or &lt;iframe&gt; tag</p>
    </div>
  );
};


// --- From components/ImagePlaceholder.tsx ---

interface ImagePlaceholderProps {
  aspectRatio?: string;
  text?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ aspectRatio = "aspect-video", text = "Image Placeholder" }) => {
  return (
    <div className={`${aspectRatio} w-full bg-gray-200 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-400 text-gray-600`}>
      <div className="text-gray-500 mb-2">
        <ImageIcon width="48" height="48" />
      </div>
      <p className="text-xl font-semibold">{text}</p>
      <p className="text-sm mt-1 text-gray-500">// TODO: Replace this div with your &lt;img&gt; tag</p>
    </div>
  );
};


// --- From components/Header.tsx ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = "text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium";
  const buttonLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a href="#" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Resilient Multi-Robot Coordination
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#abstract" className={navLinkClasses}>Abstract</a>
          <a href="#method" className={navLinkClasses}>Method</a>
          <a href="#results" className={navLinkClasses}>Results</a>
          <a href="#discussion" className={navLinkClasses}>Discussion</a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className={`${buttonLinkClasses} bg-blue-600 hover:bg-blue-700 text-white`}>
            <PaperIcon />
            <span className="hidden sm:inline">Paper</span>
          </a>
        </div>
      </nav>
    </header>
  );
};


// --- From components/Hero.tsx ---

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-tight">
        Keeping the Team Moving: How Resilient Multi-Robot Coordination Affects Human Trust and Fluency
      </h1>
      
      <VideoPlaceholder text="Teaser Video" />

    </section>
  );
};


// --- From components/Section.tsx ---

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12 md:py-16 border-t">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};


// --- From components/ReviewerResponse.tsx ---

const ReviewerResponse: React.FC = () => {
  return (
    <Section id="discussion" title="Discussion & Author's Response">
      <div className="space-y-8 text-lg text-justify leading-relaxed">
        <p className="text-center italic">
          We are grateful to the reviewers for their insightful feedback, which has been invaluable in identifying areas for improvement and clarifying the contributions of our work. This section addresses the key themes raised in the reviews.
        </p>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">1. On Claims of Trust and Fluency</h3>
          <p>
            Reviewers correctly pointed out that our claims regarding "human trust and fluency" are not directly supported by the current evaluation, as it does not include a human subjects study. The title was chosen to reflect the ultimate goal and motivation for this line of research: creating robotic systems that are reliable enough to foster fluent and trustworthy collaborations. Our work establishes the foundational technical architecture for resilience, which we hypothesize is a necessary precondition for trust. We acknowledge that a formal user study is the critical next step to validate this hypothesis. This is a primary direction for our future work.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">2. On Evaluation, Results, and Novelty</h3>
          <p>
            The feedback highlighted a need for more comprehensive results and a clearer framing of our work's novelty. Our primary contribution is the robust <strong>integration</strong> of perception, prediction, and planning into a resilient, multi-layered system capable of detecting and recovering from failures where standard methods do not. While individual components (like MPC or particle filters) are established, their synthesis into a shared autonomy framework with a dual-trigger supervisor is novel.
          </p>
          <p className="mt-4">
            To better substantiate our claims, we are preparing the following for the final version and supplementary materials:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
            <li><strong>Quantitative Analysis:</strong> A detailed table of success rates, localization error, and task completion times across multiple trials for our method versus the baseline.</li>
            <li><strong>Ablation Studies:</strong> To clarify the contribution of each module (e.g., the failsafe supervisor, the ambiguity filter), we will provide ablation studies showing system performance with these components disabled.</li>
            <li><strong>Detailed Methodology:</strong> We will provide comprehensive details on the simulation setup, the number of trials run for each scenario, and the specific parameters used, to ensure reproducibility.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">3. On Clarity, Formatting, and Missing Materials</h3>
          <p>
            We apologize for the issues with formatting, unclear notation, and broken links, which hindered readability. All reported formatting errors will be corrected. We will provide a complete appendix with detailed derivations, clear definitions for all notation used, and an expanded "Related Work" section to better situate our contributions. The supplementary video and other materials will be made available with the final publication.
          </p>
        </div>
        
      </div>
    </Section>
  );
};


// --- From App.tsx ---

const App: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white font-sans text-gray-700">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Hero />

        <Section id="abstract" title="Abstract">
          <p className="text-lg leading-relaxed text-justify">
            Safe and resilient multi-robot collaboration in human environments is a critical challenge for real world deployment. While persistent and extensive work is being carried out on human following, existing methods often rely on idealized assumptions of perfect perception and localization. Consequently, they fail to address catastrophic failures like controller deadlocks in cluttered spaces, causing interactional breakdowns that halt the team's progress and compromise task success. In this work, we tackle these challenges by introducing a safety aware control architecture built on two core ideas that enables resilient human-robot teaming. We have developed a robust perception pipeline that reliably estimates human position from noisy, ambiguous RF-ranging data. This is achieved using a two-phased spatiotemporal filter that transforms sparse sensor measurements into a continuous human position estimate, even with a minimal two robot configuration. We then present a multi-layered failsafe supervisor that monitors the low level MPC and uses a dual trigger mechanism monitoring the system costs and the progress disparity. When deadlock is detected, a progress aware recovery planner ensures that the system’s mobility is restored and the formation is guided safely out of the trap. We demonstrate that our architecture successfully navigates complex trap scenarios where nominal planners fail, demonstrating a significant improvement in system endurance, reliability and robustness.
          </p>
        </Section>

        <Section id="method" title="Method Overview">
          <p className="text-lg leading-relaxed mb-8 text-justify">
            Our proposed hierarchical system architecture ensures safe and reliable human collaboration. Noisy RF-ranging data is first processed by the Perception and Prediction Module to produce a probabilistic forecast of the human's path. This forecast is used by the Risk-Aware Motion Planner (a Stochastic MPC) to generate safe actions. In parallel, a supervisor monitors for "coordination gaps" and can initiate a collaborative resolution process.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Foundational Perception</h3>
              <p className="text-lg">We use a two-phase ambiguity resolution filter to reliably estimate human state from noisy RF sensor data, resolving geometric ambiguities inherent in two-robot setups.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Risk-Aware Motion Planning</h3>
              <p className="text-lg">A Stochastic Model Predictive Control (S-MPC) framework reasons about the full distribution of uncertainty to manage risk, planning cautious and adaptive robot behaviors.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Shared Autonomy Protocol</h3>
              <p className="text-lg">A dual-trigger supervisory layer detects coordination gaps and internal deadlocks, initiating a human-in-the-loop collaborative recovery process.</p>
            </div>
             <div>
              <h3 className="text-2xl font-bold mb-2">Collaborative Recovery</h3>
              <p className="text-lg">When a failure is detected, the system communicates with the human partner, offering strategic choices to jointly resolve the situation, enhancing resilience and trust.</p>
            </div>
          </div>
           <div className="mt-12">
             <h3 className="text-2xl font-bold mb-4 text-center">System Architecture Deep Dive</h3>
             <ImagePlaceholder aspectRatio="aspect-[2/1]" text="Figure 2: System Architecture Diagram" />
             <p className="text-lg mt-4 text-justify">
              The diagram above illustrates the data flow. Raw sensor data (top) is fed into the Perception module, which generates a reliable human state estimate. This estimate is used by a probabilistic predictor to forecast future paths. The S-MPC motion planner uses this forecast to generate safe robot actions (bottom). In parallel, the Failsafe Supervisor monitors system costs and progress, and can trigger an override via the Shared Autonomy protocol, engaging the human for collaborative recovery.
             </p>
           </div>
        </Section>

        <Section id="results" title="Results">
           <p className="text-lg leading-relaxed mb-8 text-justify">
            We validate our approach in simulated dynamic environments, demonstrating resilience to sensor noise, ambiguity, and complex navigation scenarios where baseline methods fail. Our evaluation focuses on both the perception pipeline's accuracy and the full system's ability to handle deadlocks.
          </p>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Perception Pipeline Validation</h3>
              <p className="text-lg mb-4 text-justify">Our pipeline successfully tracks the human's ground truth path while consistently rejecting the ambiguous 'ghost' path. The "Region of Plausibility" concept ensures robustness against sensor noise, while the "Minimum Displacement Principle" resolves ambiguity. The average estimation error was 0.212m, with zero localization failures compared to a 2.5% failure rate for a brittle baseline.</p>
              <ImagePlaceholder aspectRatio="aspect-video" text="Figure 7: Qualitative validation of perception pipeline" />
               <div className="mt-8">
                 <h4 className="text-xl font-bold mb-2">Quantitative Analysis</h4>
                 <ImagePlaceholder aspectRatio="aspect-[2/1]" text="Figure 5: Quantitative Validation Plots (Error, Ambiguity Resolution, Failure Rate)" />
               </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">High-Effort Deadlock Scenario</h3>
              <p className="text-lg mb-4 text-justify">The robot team must navigate a narrow gap. Our system proactively detects the high-cost maneuver and communicates with the human for a shared resolution, whereas the baseline gets stuck.</p>
              <VideoPlaceholder text="Scenario A: High-Effort Deadlock" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Low-Effort Deadlock Scenario</h3>
              <p className="text-lg mb-4 text-justify">An obstacle blocks the path. Our system detects planner stagnation and alerts the human to choose a recovery strategy, while the baseline stops without recourse.</p>
              <VideoPlaceholder text="Scenario B: Low-Effort Deadlock" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Coordination Gap Scenario</h3>
              <p className="text-lg mb-4 text-justify">The human speeds up, causing the robots to fall behind. Our system detects the large separation (a coordination gap) and initiates communication to re-establish formation.</p>
              <VideoPlaceholder text="Scenario C: Coordination Gap" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Future Evaluation: Ablation Studies</h3>
              <p className="text-lg mb-4 text-justify">To further isolate the contributions of our system's components, future work will include ablation studies. We will evaluate system performance with key modules disabled, such as the Failsafe Supervisor and the Two-Phase Ambiguity Filter, to quantify their impact on overall resilience and success rates.</p>
               <ImagePlaceholder aspectRatio="aspect-[2/1]" text="Placeholder for Ablation Study Results" />
            </div>
          </div>
        </Section>
        
        <Section id="related-work" title="Related Work">
            <p className="text-lg leading-relaxed text-justify">
                // TODO: Add content for Related Work here.
                This section addresses reviewer feedback regarding the need for a broader discussion of related literature. Our work builds upon foundational research in several areas. In multi-robot motion planning, we extend concepts from Model Predictive Control (MPC) by incorporating a stochastic framework to handle uncertainty, similar to the work of [Author, Year]. However, our approach is distinct in its focus on human-robot teams and shared autonomy...
                <br/><br/>
                Regarding perception, while UWB-based localization has been explored [Author, Year], our two-phase ambiguity filter provides a novel solution for the minimal two-robot configuration, a common and challenging scenario...
            </p>
        </Section>

        <ReviewerResponse />
        
      </main>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon />
      </button>
    </div>
  );
};


// --- Original index.tsx render logic ---

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
