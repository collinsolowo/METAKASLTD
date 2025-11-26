import { useState } from 'react';
import { Container } from '../components/layout/Container';

const categories = ['All', 'Manufacturing', 'Projects', 'Facilities', 'Equipment'];

const galleryItems = [
  { id: 1, category: 'Manufacturing', title: 'Panel Assembly Line' },
  { id: 2, category: 'Manufacturing', title: 'Transformer Production' },
  { id: 3, category: 'Projects', title: 'Power Distribution Installation' },
  { id: 4, category: 'Projects', title: 'Industrial Control Room' },
  { id: 5, category: 'Facilities', title: 'Quality Testing Lab' },
  { id: 6, category: 'Facilities', title: 'Warehouse & Logistics' },
  { id: 7, category: 'Equipment', title: 'Switchgear Units' },
  { id: 8, category: 'Equipment', title: 'Custom Electrical Panels' },
  { id: 9, category: 'Projects', title: 'On-Site Installation' },
  { id: 10, category: 'Manufacturing', title: 'Welding & Fabrication' },
  { id: 11, category: 'Equipment', title: 'Generator Systems' },
  { id: 12, category: 'Projects', title: 'Commercial Building Project' }
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section
        className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Project <span className="text-metakas-accent">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Explore our facilities, manufacturing capabilities, and completed projects
            </p>
          </div>
        </Container>
      </section>


      <section className="py-20 bg-white">
        <Container>
          <div className="mb-12" data-aos="fade-up">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                      ? 'bg-metakas-accent text-white shadow-lg'
                      : 'bg-metakas-light text-metakas-primary hover:bg-metakas-slate hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform group-hover:scale-110 transition-transform duration-300">
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-metakas-accent text-sm font-medium">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
