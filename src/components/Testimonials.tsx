const testimonials = [
  {
    name: 'Emma Carter',
    text: 'Absolutely love this place! The coffee is always fresh and the croissants are amazing.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Daniel Smith',
    text: 'Best coffee shop in town. Great ambiance and friendly staff. Highly recommended!',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sophia Green',
    text: 'I come here every morning. Their lattes are perfect and the service is top-notch.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Testimonials = () => {
  return (
<section className="bg-[#f9f5f1]/80 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4b2e2e] mb-4" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">
          Real experiences from coffee lovers just like you.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
