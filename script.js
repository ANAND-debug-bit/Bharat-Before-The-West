const discoveries = [

// science and medicine 
{   category: "Science & Medicine",
    title: "Surgery & Medicine",
    source: "Sushruta Samhita (~600 BCE)",
    indianOrigin: "Sushruta performed cataract surgery, rhinoplasty, and documented 300+ surgical procedures.",
    westernClaim: "Modern surgery is typically traced back to Europe in the 16th–17th century CE.",
    gap: "~2,000 years earlier",
    gapColor: "red",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQinnkbv4QiVcYU2DxHSJUTHddH-QNJRxmA&s" 
},

{   category: "Science & Medicine",
    title: "Ayurveda & Herbal Medicine",
    source: "Charaka Samhita (~300 BCE)",
    indianOrigin: "Charaka documented 340+ plant-based medicines and established principles of holistic healing.",
    westernClaim: "Hippocratic medicine is often considered the 'start' of medicine (~400 BCE) in Western textbooks.",
    gap: "Predates or concurrent",
    gapColor: "orange",
    image: "https://www.indica.today/wp-content/uploads/2020/02/history-of-ayurveda-640x394.jpg"
},


{   category: "Science & Medicine",
    title: "Zero & the Decimal System",
    source: "Aryabhata, Brahmagupta (~5th–7th century CE)",
    indianOrigin: "Invented the concept of zero as a number and positional decimal notation that the whole world uses today.",
    westernClaim: "Often mistakenly attributed to Arabic or European mathematicians.",
    gap: "Centuries before Europe adopted it",
    gapColor: "blue",
    image: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/image-001-1600757408.png" 
},


{   category: "Science & Medicine",
    title: "Astronomy & Heliocentrism",
    source: "Aryabhata (~499 CE)",
    indianOrigin: "Aryabhata calculated that the Earth rotates on its own axis and accurately predicted solar and lunar eclipses.",
    westernClaim: "Copernicus is broadly credited with proposing heliocentrism in 1543 CE.",
    gap: "~1,000 years earlier",
    gapColor: "red",
    image: "https://i.pinimg.com/736x/c3/00/c1/c300c17cae9f304e46bcc53c502661c9.jpg" 
},

  
{   category: "Science & Medicine",
    title: "Trigonometry & Algebra",
    source: "Brahmagupta, Bhaskara (~628–1150 CE)",
    indianOrigin: "India developed sine and cosine tables, quadratic equations, and Pythagorean triples via the Sulbasutras (~800 BCE).",
    westernClaim: "Pythagoras (Greece, ~570 BCE) gets credit; algebra attributed to Al-Khwarizmi and European scholars.",
    gap: "Sulbasutras predate Pythagoras",
    gapColor: "orange",
    image: "https://www.matheview.com/images/matview/bh-1.jpg" 
},

{   category: "Science & Medicine",
    title: "Atomic Theory",
    source: "Maharishi Kanad (~600 BCE)",
    indianOrigin: "Kanad proposed 'anu' (atom) — the smallest indivisible unit of matter — in the Vaisheshika Sutras.",
    westernClaim: "Democritus (Greece) is credited with atomic theory ~460 BCE; Dalton's model came in 1803 CE.",
    gap: "Concurrent or earlier than Democritus",
    gapColor: "green",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGzo2G0uEY3nV57x0f9iZeX4DuzcYRB7NOg&s" 
},

{ category: "Science & Medicine",
    title: "Law of Gravity",
    source: "Bhaskaracharya, Siddhanta Shiromani (~1150 CE)",
    indianOrigin: "Bhaskaracharya clearly wrote that the Earth attracts all objects towards itself due to its own power, and that objects fall because of this attractive force — over 500 years before Newton put a name to it.",
    westernClaim: "Isaac Newton is universally credited with discovering gravity in 1687 CE via the Principia Mathematica.",
    gap: "~500 years earlier",
    gapColor: "red",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuL493DZ0YzfTQiTssiOVYUWasrKsECI_wtA&s" 
},

// education and knowledge


{    category: "Education & Knowledge",
    title: "World's First University",
    source: "Takshashila (~700 BCE)",
    indianOrigin: "Takshashila had 10,500+ students and 60+ subjects including medicine, law, military strategy, and philosophy.",
    westernClaim: "The University of Bologna (Italy), founded in 1088 CE, is commonly called the oldest university in the West.",
    gap: "~1,800 years earlier",
    gapColor: "red",
    image: "https://i0.wp.com/gokulamseekias.com/wp-content/uploads/2023/07/Nalanda-University-1.jpg"
},

{
    category: "Education & Knowledge",
    title: "Formal Grammar & Linguistics",
    source: "Panini (~4th century BCE)",
    indianOrigin: "Panini's Ashtadhyayi laid down 3,959 rules of Sanskrit grammar — considered the first formal grammar system in human history.",
    westernClaim: "Greek grammar by Dionysius Thrax (~100 BCE) is often cited as the first formal grammar in Western academia.",
    gap: "~200–300 years earlier",
    gapColor: "orange",
    image: "https://m.media-amazon.com/images/I/61H7grt8DtL.jpg" 
},

// lifestyle and culture
{
    category: "Lifestyle & Culture",
    title: "Yoga",
    source: "Vedic period (~3000 BCE+); codified by Patanjali (~200 BCE)",
    indianOrigin: "Yoga is mentioned in the Rigveda. Patanjali's Yoga Sutras are the definitive foundational text.",
    westernClaim: "Often packaged and marketed as a Western fitness and wellness trend since the 20th century.",
    gap: "~5,000 years of Indian origin",
    gapColor: "green",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJZPdQOIirvhmKHoMG-wFnpkgfMT3fjXdDA&s" 
},

{
    category: "Lifestyle & Culture",
    title: "Chess (Chaturanga)",
    source: "Gupta Empire (~6th century CE)",
    indianOrigin: "Chaturanga was a four-division military strategy game that spread to Persia as Shatranj and then to Europe as chess.",
    westernClaim: "Chess is often associated with European medieval culture; FIDE (Swiss body) governs it today.",
    gap: "~600 CE Indian invention",
    gapColor: "orange",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlrMeact8kxCHFdG2yK8ytXBkuqtvMcmBrQ&s" 
},

{
    category: "Lifestyle & Culture",
    title: "Cotton Cultivation & Textiles",
    source: "Indus Valley (~3000 BCE)",
    indianOrigin: "World's earliest cotton spinning and weaving was done in the Indus Valley — confirmed by archaeological artifacts.",
    westernClaim: "Industrial cotton production is often presented as a European achievement of the 18th century.",
    gap: "~5,000 years earlier",
    gapColor: "red",
    image: "https://www.alphonsostories.com/AlphonSoStoriesImages/downloads/Farmers-in-the-Indus-Valley.JPG"
},

{
    category: "Lifestyle & Culture",
    title: "Urban Planning & Sanitation",
    source: "Indus Valley (~2600 BCE)",
    indianOrigin: "Mohenjo-daro & Harappa had grid-road city planning, advanced drainage systems, multi-storey buildings, and public baths.",
    westernClaim: "Roman aqueducts (100 BCE–200 CE) are broadly called the pioneering urban sanitation system.",
    gap: "~2,500 years earlier",
    gapColor: "red",
    image: "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202209/m-1200080922040032.jpeg" 
},

{
    category: "Lifestyle & Culture",
    title: "Metallurgy & Steel (Wootz)",
    source: "~300 BCE, South India",
    indianOrigin: "Wootz steel was an ultra-high carbon steel that was exported to the Middle East and became the famous Damascus steel.",
    westernClaim: "Modern steel production is attributed to the Bessemer process in England, 1856 CE.",
    gap: "~2,000 years earlier",
    gapColor: "red",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/d7yjty.jpg?c=original" 
},

{
    category: "Lifestyle & Culture",
    title: "Soap & Hygiene Practices",
    source: "Vedic period (~1500 BCE)",
    indianOrigin: "Charaka and Sushruta texts mention detailed cleanliness rituals and herbal body cleansers.",
    westernClaim: "Commercial soap is attributed to European industry in the 19th century.",
    gap: "~3,000 years earlier",
    gapColor: "red",
    image: "https://cdn.britannica.com/05/284505-050-F1860C4D/Painting-Of-Acharya-Charaka-Physician-Author-Of-Charaka-Samhita-India.jpg"
},

// navigation and trade 

{
    category: "Navigation & Trade",
    title: "Navigation & Maritime Trade",
    source: "Indus Valley (~3000 BCE), Lothal dockyard",
    indianOrigin: "The world's first tidal dockyard was built at Lothal; India had active seafaring trade routes to Mesopotamia.",
    westernClaim: "Phoenicians and Greeks are broadly credited with pioneering sea navigation.",
    gap: "~2,500 years earlier",
    gapColor: "red",
    image: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/10/loth.jpg" 
},

{
    category: "Navigation & Trade",
    title: "Coinage & Standardised Weights",
    source: "Punch-marked coins (~6th century BCE)",
    indianOrigin: "Among the world's earliest coins; standardised weights and measures confirmed at multiple Indus Valley excavation sites.",
    westernClaim: "Lydian coins (Turkey) are often cited in textbooks as the world's 'first coins' (~600 BCE).",
    gap: "Concurrent or contemporary",
    gapColor: "orange",
    image: "https://i.pinimg.com/736x/74/2c/99/742c993d66934f1347620ddfaab39f79.jpg" 
},
];

// site functioning part 

const container = document.getElementById("events-container");
const grouped = {};
discoveries.forEach(function(d) {
if (!grouped[d.category]) {
grouped[d.category] = []; }
grouped[d.category].push(d);
});
let cardIndex = 0;
Object.keys(grouped).forEach(function(category) {
const sectionDiv = document.createElement("div");
sectionDiv.className = "section-header";
sectionDiv.innerHTML = `
<div class="section-label">Chapter</div>
<h2 class="section-title">${category}</h2>
`;
container.appendChild(sectionDiv);
grouped[category].forEach(function(event) {
const card = document.createElement("div");
if (cardIndex % 2 !== 0) {
card.className = "event-card flip-image";
} else {
card.className = "event-card";
}
cardIndex++;
card.innerHTML = `
<div class="card-image-wrap">
<img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'" />
<div class="card-image-overlay"></div>
</div>
<div class="card-info">

<p class="card-category-tag">${event.category}</p>
<h3 class="card-title">${event.title}</h3>
<p class="card-source">${event.source}</p>
<div class="card-rows">
<div class="card-row">
<span class="row-label">Indian Origin</span>
<span class="row-value indian">${event.indianOrigin}</span>
</div>
<div class="card-row">

<span class="row-label">Western Claim</span>
<span class="row-value">${event.westernClaim}</span>
</div>
</div>
<span class="gap-badge ${event.gapColor}">${event.gap}</span>
</div>
`;
container.appendChild(card);

});
});

// scroll animation 

const observer = new IntersectionObserver(
(entries) => {
entries.forEach(function(entry) { if (entry.isIntersecting) {
entry.target.classList.add("visible");
observer.unobserve(entry.target); } }); }, { threshold: 0.1 } );
document.querySelectorAll(".event-card").forEach(function(card) {
observer.observe(card);
});
