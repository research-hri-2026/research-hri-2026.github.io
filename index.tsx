
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const navLinkClasses = "text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer";
  const buttonLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Keeping the Team Moving
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#abstract" onClick={handleNavClick} className={navLinkClasses}>Abstract</a>
          <a href="#method" onClick={handleNavClick} className={navLinkClasses}>Method</a>
          <a href="#results" onClick={handleNavClick} className={navLinkClasses}>Results</a>
          <a href="#related-work" onClick={handleNavClick} className={navLinkClasses}>Related Work</a>
          <a href="#discussion" onClick={handleNavClick} className={navLinkClasses}>Discussion</a>
          <a href="#notations" onClick={handleNavClick} className={navLinkClasses}>Notations</a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="paper.pdf" target="_blank" rel="noopener noreferrer" className={`${buttonLinkClasses} bg-blue-600 hover:bg-blue-700 text-white`}>
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
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Keeping the Team Moving: Resilient Multi-Robot Coordination for Effective Human–Robot Collaboration
      </h1>
      <p className="max-w-3xl mx-auto text-center text-amber-800 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md mb-12">
        <strong>Note:</strong> This project page is a work in progress and supplementary materials are being added.
      </p>
      
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

// --- From components/Notations.tsx ---

const NotationEntry: React.FC<{ symbol: string; description: string }> = ({ symbol, description }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4 border-b border-gray-200 last:border-b-0 items-start">
    <dt className="font-mono text-lg text-blue-700 md:text-right md:pr-6"><code>{symbol}</code></dt>
    <dd className="md:col-span-3 text-lg leading-relaxed">{description}</dd>
  </div>
);

const NotationGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">{title}</h3>
    <dl>
      {children}
    </dl>
  </div>
);

const Notations: React.FC = () => {
  return (
    <Section id="notations" title="Appendix: Notation Guide">
      <div className="text-justify leading-relaxed">
        <p className="text-center mb-12 text-lg">
          This section provides a comprehensive guide to the mathematical notations and symbols used throughout the paper to ensure clarity and reproducibility.
        </p>

        <NotationGroup title="Perception & State Estimation">
          <NotationEntry symbol="p_h(t)" description="The estimated 2D position of the human partner at time t." />
          <NotationEntry symbol="v_h(t)" description="The estimated 2D velocity of the human partner at time t." />
          <NotationEntry symbol="x_t" description="The complete state of the human at time t, comprising position and velocity, i.e., [p_h(t), v_h(t)]." />
          <NotationEntry symbol="r_buffer" description="A buffer radius added to sensor measurements to create an annulus (Region of Plausibility), accounting for noise." />
          <NotationEntry symbol="σ_sensor" description="The standard deviation of the RF-ranging sensor's measurement error, used to calculate r_buffer." />
          <NotationEntry symbol="c_A, c_B" description="The two candidate centroids for the human's position arising from the intersection of two measurement annuli in a two-robot setup." />
        </NotationGroup>

        <NotationGroup title="Prediction & Motion Planning">
          <NotationEntry symbol="S-MPC" description="Stochastic Model Predictive Control, our risk-aware motion planning framework." />
          <NotationEntry symbol="H" description="The prediction horizon, representing the number of future time steps the S-MPC plans over." />
          <NotationEntry symbol="J" description="The total cost function that the S-MPC aims to minimize." />
          <NotationEntry symbol="J_deterministic,k" description="The deterministic component of the cost function, related to tracking a reference path and maintaining formation." />
          <NotationEntry symbol="J_stochastic,k" description="The stochastic (probabilistic) component of the cost, penalizing the risk of collision with the human based on predicted uncertainty." />
          <NotationEntry symbol="p_com(k)" description="The position of the robot formation's center of mass at future time step k." />
          <NotationEntry symbol="R_total" description="The total required separation distance between the robot formation and the human, used to calculate risk." />
          <NotationEntry symbol="u*" description="The optimal control sequence (robot actions) found by the S-MPC solver." />
          <NotationEntry symbol="VO" description="Velocity Obstacle, a method used for proactive collision avoidance with dynamic and static obstacles." />
        </NotationGroup>
        
        <NotationGroup title="Failsafe Supervisor & Shared Autonomy">
          <NotationEntry symbol="D_cost" description="A trigger flag for a 'High-Effort Failure' deadlock, activated when the planner cost is persistently high." />
          <NotationEntry symbol="D_prog" description="A trigger flag for a 'Low-Effort Failure' deadlock, activated when the team makes negligible forward progress." />
          <NotationEntry symbol="D_gap" description="A trigger flag for a 'Team Coordination Gap', activated when the separation between the human and robots exceeds a threshold." />
          <NotationEntry symbol="T_severe" description="A severe cost threshold used to detect high-effort failures." />
          <NotationEntry symbol="d_prog(t)" description="The forward progress of the formation along its reference path at time t." />
          <NotationEntry symbol="D_max" description="The maximum allowable separation distance before a coordination gap is flagged." />
        </NotationGroup>

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
             <h3 className="text-2xl font-bold mb-4 text-center">System Architecture Overview</h3>
             <img src="System Architecture.png" alt="System Architecture Diagram" className="w-full rounded-lg shadow-lg border border-gray-200" />
             <p className="text-center text-md italic text-gray-600 mt-2">
                Figure 2: The proposed hierarchical system architecture.
             </p>
             <div className="text-lg mt-4 text-justify space-y-4">
                <p>Our approach integrates three coordinated layers to achieve safe, responsive multi-robot human-following:</p>
                
                <div>
                    <h4 className="text-xl font-bold mt-4 mb-2">Layer 1: Perception and Prediction Pipeline</h4>
                    <p>The system begins with noisy RF-ranging measurements from multiple robots. Our Region of Plausibility formulation converts these noisy distance measurements into bounded geometric areas (annuli) that guarantee the true human position lies within them. A two-phase ambiguity filter then resolves the inherent ambiguity of multi-robot localization—selecting the temporally consistent human position estimate and rejecting "ghost" solutions. This reliable estimate is then fed into a Particle Filter to forecast the human's future path for our motion planner. This layer outputs a reliable, bounded human state estimate fed downstream. </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mt-4 mb-2">Layer 2: Risk-Aware Motion Planning (S-MPC)</h4>
                    <p>The reliable human position estimate flows into a stochastic model predictive controller (S-MPC) that plans safe, predictable robot motions while maintaining formation. The S-MPC continuously monitors three complementary failure modes:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li><strong>Constraint-Conflict Failure:</strong> High MPC cost indicates conflicting objectives (e.g., formation maintenance vs. collision avoidance in narrow passages). The system is struggling but not yet deadlocked.</li>
                        <li><strong>Stagnation Failure:</strong> Low MPC cost but negligible forward progress indicates the robots are stuck in a local minimum. The system appears healthy but makes no task progress.</li>
                        <li><strong>Coordination Gap Failure:</strong> Even when the robot system appears locally healthy (low cost, smooth motion), the team may be losing synchronization with the human partner. This occurs when the human's speed or path choices exceed the robot's risk-averse planning capabilities, causing the separation distance between robot formation and human to exceed a safety threshold (D_max). The robots may be moving smoothly, but they're falling behind and losing team cohesion.</li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-xl font-bold mt-4 mb-2">Layer 3: Failsafe Supervisor and Human-Robot Coordination</h4>
                    <p>When either failure mode is detected, the supervisor triggers an alert to the human partner. The human can then:</p>
                     <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                        <li>Provide guidance to resolve constraint conflicts</li>
                        <li>Break deadlocks by commanding a new waypoint</li>
                        <li>Or toggle shared autonomy modes</li>
                    </ul>
                     <p>The supervisor seamlessly handles the transition between autonomous operation and human guidance, ensuring the team keeps moving toward their goal.</p>
                </div>
                
                <div>
                    <h4 className="text-xl font-bold mt-4 mb-2">Why Integration Matters</h4>
                    <p>This three-layer architecture works because each layer is optimized for its role—perception for robustness, planning for safety, and supervision for resilience. Individual components cannot replicate integrated system performance (demonstrated through ablation studies). The tight coupling between perception reliability and control failure detection prevents catastrophic cascading failures common in systems where these concerns are addressed separately.</p>
                </div>
              </div>
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
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black">
                <video className="w-full h-full object-contain" src="perception.mp4" controls autoPlay muted loop>
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-md italic text-gray-600 mt-2">
                Figure 7: A Deep Dive into Our Robust Perception Pipeline.
              </p>
               <div className="mt-12">
                <h4 className="text-xl font-bold mb-4 text-center">Comparative Analysis: Baseline vs. Our Method</h4>
                <p className="text-lg mb-4 text-justify">
                  This video provides a side-by-side comparison of our perception pipeline against a baseline method that uses direct multilateration. Note the baseline's frequent localization failures (red flashes) and incorrect "ghost" path selections, while our method maintains stable and accurate tracking.
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black mt-4">
                  <video className="w-full h-full object-contain" src="comparison1.mp4" controls autoPlay muted loop>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
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
        <Notations />
        
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
