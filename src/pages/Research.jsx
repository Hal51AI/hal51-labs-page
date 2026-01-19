import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const researchData = {
  section1: [
    {
      title: "Beyond the imitation game: Quantifying and extrapolating the capabilities of language models",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:hfzGNhXhx5MC"
    },
    {
      title: "Auditing saliency cropping algorithms",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:oursBaop5wYC",
      extras: [
        { label: "Project page", link: "https://vinayprabhu.github.io/Saliency_Image_Cropping/" },
        { label: "Video", link: "https://youtu.be/BSHG0bIcNL0?si=b8xUklNTyatHN5Jz" }
      ]
    },
    {
      title: "Model weight theft with just noise inputs: The curious case of the petulant attacker",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:uWiczbcajpAC"
    },
    {
      title: "Understanding adversarial robustness through loss landscape geometries",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:nrtMV_XWKgEC"
    },
    {
      title: "Vulnerability of deep learning-based gait biometric recognition to adversarial perturbations",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:NJ774b8OgUMC"
    },
    {
      title: "On Lyapunov exponents and adversarial perturbation",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:W5xh706n7nkC"
    },
    {
      title: "On detecting adversarial inputs with entropy of saliency maps",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:VLnqNzywnoUC"
    },
    {
      title: "On grey-box adversarial attacks and transfer learning",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:7T2F9Uy0os0C"
    },
    {
      title: "Art-attack! on style transfers with textures, label categories and adversarial examples",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:_Re3VWB3Y0AC"
    },
    {
      title: "SIMUni: Sampling Impostors from Misfit Universal Background Models in accelerometric gait biometric verification",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:5LPo_wSKItgC"
    },
    {
      title: "Smile in the face of adversity much? A print based spoofing attack",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:g8uWPOAv7ggC"
    },
    {
      title: "OODles of ODDs: The landscape of Out-of-distribution vulnerabilities of vision models",
      link: "https://www.vinayprabhu.com/spice-cabinet/ood"
    },
    {
      title: "Did They Direct the Violence or Admonish It? A Cautionary Tale on Contronomy, Androcentrism and Back-Translation Foibles",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:xii_ZKWM4-0C",
      extras: [
        { label: "Video", link: "https://youtu.be/eKRpiMBlu40?si=-87HVJ3FGEO5rzOw" }
      ]
    }
  ],
  section2: [
    {
      title: "Multimodal datasets: misogyny, pornography, and malignant stereotypes",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:M_lZXyI38BkC"
    },
    {
      title: "Large image datasets: A pyrrhic win for computer vision?",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:u-coK7KVo8oC"
    },
    {
      title: "Into the laion’s den: Investigating hate in multimodal datasets",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:NtGNdKbuCngC"
    },
    {
      title: "On Hate Scaling Laws For Data-Swamps",
      link: "https://arxiv.org/abs/2306.13141"
    },
    {
      title: "The blood diamond effect in neural art: On ethically troublesome images of the imagenet dataset",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&cstart=20&pagesize=80&citation_for_view=5Lck_J0AAAAJ:EkHepimYqZsC",
      extras: [
        { label: "Video", link: "https://youtu.be/tAea9kJRqcA?si=_OY_mciWQVCKZfzd" }
      ]
    },
    {
      title: "Covering up bias in CelebA-like datasets with Markov blankets: A post-hoc cure for attribute prior avoidance",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=5Lck_J0AAAAJ&citation_for_view=5Lck_J0AAAAJ:uc_IGeMz5qoC"
    },
    {
      title: "JFT-300M: The mystery box",
      link: "https://youtu.be/TvVc1e_4648?si=TY6pW1ij4xwJtbaV"
    }
  ]
};

const Research = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-8">
                  Research & Safety
                </h1>
                <p className="text-xl text-cyan-400 font-medium max-w-3xl mx-auto">
                  Grounded in Rigorous Science. Building safe educational AI requires deep expertise in adversarial robustness and data integrity.
                </p>
              </div>
              
              <div className="text-lg text-gray-300 space-y-6 max-w-4xl mx-auto leading-relaxed">
                <p>
                  Our journey began with a realization: to bring AI into the classroom, we must first master its safety. At Hal51 AI Labs, we don't just build educational tools; we research the fundamental vulnerabilities of the systems powering them. 
                </p>
                <p>
                  Our work in <span className="text-white font-semibold">AI Safety, Ethics, and Alignment (SEA)</span> isn't abstract—it's the engineering backbone of the LemurBox, ensuring that as we deploy powerful models, they remain safe, reliable, and beneficial for every student.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-20 max-w-4xl mx-auto">
              {/* Section 1 */}
              <section>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Testing the Limits: Adversarial Robustness
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    In an educational setting, an AI model must be robust. It interacts with curious students who may unintentionally (or intentionally) probe its boundaries. Our research into <span className="text-cyan-400 font-medium">red-teaming</span> and <span className="text-cyan-400 font-medium">adversarial attacks</span> allows us to anticipate failure modes before they happen. By mathematically quantifying the capabilities and vulnerabilities of language models, we design systems that remain stable and aligned even in unpredictable scenarios.
                  </p>
                </div>
                
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Selected Publications</h3>
                <ol className="space-y-6">
                  {researchData.section1.map((paper, index) => (
                    <motion.li 
                      key={index}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-start">
                        <span className="text-cyan-500 font-mono mr-4 mt-1">{String(index + 1).padStart(2, '0')}.</span>
                        <div>
                          <a 
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                          >
                            {paper.title}
                          </a>
                          {paper.extras && (
                            <div className="flex gap-3 mt-2 text-sm">
                              {paper.extras.map((extra, i) => (
                                <a
                                  key={i}
                                  href={extra.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-500 hover:text-violet-400 transition-colors duration-200"
                                >
                                  [{extra.label}]
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </section>

              {/* Section 2 */}
              <section>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    The Integrity of Knowledge: Dataset Auditing
                  </h2>
                  <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
                    An AI is only as good as the data it learns from. When deploying models for education, the presence of harmful stereotypes or malignant bias is unacceptable. We pioneer techniques to <span className="text-cyan-400 font-medium">audit massive multimodal datasets</span>, uncovering hidden biases and "data swamps" that degrade model performance. Our work in <span className="text-cyan-400 font-medium">bias mitigation</span> ensures that the avatars in the LemurBox serve as impartial, inclusive, and safe companions.
                  </p>
                </div>

                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Selected Publications</h3>
                <ol className="space-y-6">
                  {researchData.section2.map((paper, index) => (
                    <motion.li 
                      key={index}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-start">
                        <span className="text-cyan-500 font-mono mr-4 mt-1">{String(index + 1).padStart(2, '0')}.</span>
                        <div>
                          <a 
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                          >
                            {paper.title}
                          </a>
                          {paper.extras && (
                            <div className="flex gap-3 mt-2 text-sm">
                              {paper.extras.map((extra, i) => (
                                <a
                                  key={i}
                                  href={extra.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-500 hover:text-violet-400 transition-colors duration-200"
                                >
                                  [{extra.label}]
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </section>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-20 pt-8 border-t border-white/10 text-center">
              <p className="text-lg text-gray-300">
                <span className="font-bold text-cyan-400">Read More:</span> Check out our latest updates on AI safety at{' '}
                <a 
                  href="https://alignchronicles.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 underline decoration-cyan-500/50 hover:decoration-cyan-400 transition-all duration-200"
                >
                  Align Chronicles
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
