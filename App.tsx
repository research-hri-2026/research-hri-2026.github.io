import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import VideoPlaceholder from './components/VideoPlaceholder';
import ImagePlaceholder from './components/ImagePlaceholder';
import { ChevronUpIcon } from './components/Icons';

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
            Safe and resilient multi-robot collaboration in human environments is a critical challenge for real world deployment. While persistent and extensive work is being carried out on human following, existing methods often rely on idealized assumptions of perfect perception and localization. Consequently, they fail to address catastrophic failures like controller deadlocks in cluttered spaces, causing interactional breakdowns that halt the team's progress and erode human trust. In this work, we tackle these challenges by introducing a safety aware control architecture built on two core ideas that enables resilient human-robot teaming. We have developed a robust perception pipeline that reliably estimates human position from noisy, ambiguous RF-ranging data. We then present a multi-layered failsafe supervisor that monitors the low level MPC and uses a dual trigger mechanism monitoring the system costs and the progress disparity. When deadlock is detected, a progress aware recovery planner ensures that the system's mobility is restored and the formation is guided safely out of the trap.
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

export default App;