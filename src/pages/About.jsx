import Layout from '../components/Layout';
import vinayImg from '../assets/vinay.webp';
import sangImg from '../assets/sang.webp';
import vikranthImg from '../assets/vikranth.webp';

const team = [
  {
    name: 'Vinay Prabhu',
    role: 'Chief Executive Officer',
    education: 'PhD ECE - Carnegie Mellon University | MSEE - IIT Madras',
    image: vinayImg,
    bio: [
      'AI/ML generalist',
      'Previously Employee #1 and Chief Scientist at UnifyID AI Labs (Raised $23.5M, Exit in 2021)',
      '2020 VentureBeat Computer Vision Innovation of the Year award winner',
      'Two Best Paper awards (DLSW-17, EACL-ANLP-21)'
    ]
  },
  {
    name: 'Sang Han',
    role: 'Chief Technology Officer',
    education: 'BSc - University of California: San Diego',
    image: sangImg,
    bio: [
      'Programmer / Machine Learning Engineer',
      'Fall 2019 UnifyID Research Fellowship Organizer',
      'DARPA Memex collaborator in Data Science',
      'Open Source contributor'
    ]
  },
  {
    name: 'Vikranth Kumar Shivaa',
    role: 'Chief Mobile Officer',
    education: 'MS CS - University of New Haven',
    image: vikranthImg,
    bio: [
      'Full Stack AI Engineering',
      'Previously Co-Founder & CTO at Nooble (Venture-backed)',
      'Early at FamPay (YC & Sequoia-backed), KonnectShift'
    ]
  }
];

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              The minds behind Hal51 AI Labs
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-3 sm:grid-cols-1">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-6">
                  <img 
                    className="w-full h-full object-cover rounded-full shadow-lg" 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500 mt-1 mb-4">{member.education}</p>
                <ul className="text-gray-600 text-left space-y-2 text-sm max-w-xs">
                  {member.bio.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-indigo-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
