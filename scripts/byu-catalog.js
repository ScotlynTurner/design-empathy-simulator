const programs = [
  { name: "Accounting", degree: "BS", college: "Business" },
  { name: "Accounting: Professional Accounting", degree: "BS", college: "Business" },
  { name: "Accounting: Tax", degree: "BS", college: "Business" },
  { name: "Acting", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Actuarial Science", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Ancient Near Eastern Studies: Greek New Testament", degree: "BA", college: "Kennedy Center" },
  { name: "Ancient Near Eastern Studies: Hebrew Bible", degree: "BA", college: "Kennedy Center" },
  { name: "Animation", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Anthropology: Archaeology", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Anthropology: Cultural and Linguistic", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Anthropology: Cultural and Linguistic Double Major", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Applied English Linguistics", degree: "BA", college: "Humanities" },
  { name: "Applied Physics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Applied Physics: Acoustics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Applied Physics: Data Science", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Arabic Language", degree: "BA", college: "Humanities" },
  { name: "Art", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Art Education K-12", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Art History & Curatorial Studies", degree: "BA", college: "Humanities" },
  { name: "Art: Technology", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Arts Administration", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Asian Studies: China Studies", degree: "BA", college: "Kennedy Center" },
  { name: "Asian Studies: Japan Studies", degree: "BA", college: "Kennedy Center" },
  { name: "Asian Studies: Korea Studies", degree: "BA", college: "Kennedy Center" },
  { name: "Biochemistry", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Biodiversity & Conservation", degree: "BS", college: "Life Sciences" },
  { name: "Bioinformatics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences / Life Sciences" },
  { name: "Biological Science Education", degree: "BS", college: "Life Sciences" },
  { name: "Biology", degree: "BS", college: "Life Sciences" },
  { name: "Biophysics", degree: "BS", college: "Life Sciences" },
  { name: "Cell Biology and Physiology", degree: "BS", college: "Life Sciences" },
  { name: "Chemical Engineering", degree: "BS", college: "Engineering" },
  { name: "Chemistry", degree: "BA", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Chemistry", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Chemistry Education", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Chinese", degree: "BA", college: "Humanities" },
  { name: "Civil Engineering", degree: "BS", college: "Engineering" },
  { name: "Classical Civilization", degree: "BA", college: "Humanities" },
  { name: "Classics", degree: "BA", college: "Humanities" },
  { name: "Commercial Music", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Communication Disorders", degree: "BS", college: "Education" },
  { name: "Communications: Advertising", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Communications: Journalism and Sports Media", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Communications: Media & Society", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Communications: Public Relations", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Comparative Literature", degree: "BA", college: "Humanities" },
  { name: "Computer Engineering", degree: "BS", college: "Engineering" },
  { name: "Computer Science", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Computer Science: Animation and Games", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Construction Management", degree: "BS", college: "Engineering" },
  { name: "Cybersecurity", degree: "BS", college: "Engineering" },
  { name: "Dance", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Dance", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Dance Education K-12", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Data Science", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Dietetics", degree: "BS", college: "Life Sciences" },
  { name: "Early Childhood Education", degree: "BS", college: "Education" },
  { name: "Earth & Space Science Education", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Economics", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Editing and Publishing", degree: "BA", college: "Humanities" },
  { name: "Electrical Engineering", degree: "BS", college: "Engineering" },
  { name: "Elementary Education", degree: "BS", college: "Education" },
  { name: "English", degree: "BA", college: "Humanities" },
  { name: "English Teaching", degree: "BA", college: "Humanities" },
  { name: "Entrepreneurial Management", degree: "BS", college: "Business" },
  { name: "Environmental Geology", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Environmental Science and Sustainability", degree: "BS", college: "Life Sciences" },
  { name: "European Studies", degree: "BA", college: "Kennedy Center" },
  { name: "Exercise & Wellness", degree: "BS", college: "Life Sciences" },
  { name: "Exercise Science", degree: "BS", college: "Life Sciences" },
  { name: "Experience Design and Management", degree: "BS", college: "Business" },
  { name: "Facility and Property Management", degree: "BS", college: "Engineering" },
  { name: "Family & Consumer Sciences Education", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Family History—Genealogy", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Family Life: Family Studies", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Family Life: Human Development", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Finance", degree: "BS", college: "Business" },
  { name: "Food Science", degree: "BS", college: "Life Sciences" },
  { name: "French", degree: "BA", college: "Humanities" },
  { name: "French Studies", degree: "BA", college: "Humanities" },
  { name: "French Teaching", degree: "BA", college: "Humanities" },
  { name: "Genetics, Genomics, & Biotechnology", degree: "BS", college: "Life Sciences" },
  { name: "Geography: Environment and Society", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geography: Geospatial Intelligence", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geography: Geospatial Science & Technology", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geography: Global Studies", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geography: Tourism Development", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geography: Urban & Regional Planning", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Geology", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "German", degree: "BA", college: "Humanities" },
  { name: "German Teaching", degree: "BA", college: "Humanities" },
  { name: "Global Supply Chain Management", degree: "BS", college: "Business" },
  { name: "Graphic Design", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Greek Emphasis", degree: "BA", college: "Humanities" },
  { name: "History", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "History Teaching", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Human Resource Management", degree: "BS", college: "Business" },
  { name: "Human-Computer Interaction", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Illustration", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Information Systems", degree: "BS", college: "Business" },
  { name: "Interdisciplinary Design", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Interdisciplinary Humanities", degree: "BA", college: "Humanities" },
  { name: "International Relations", degree: "BA", college: "Kennedy Center" },
  { name: "International Strategy and Diplomacy", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Italian", degree: "BA", college: "Humanities" },
  { name: "Italian Studies", degree: "BA", college: "Humanities" },
  { name: "Japanese", degree: "BA", college: "Humanities" },
  { name: "Korean", degree: "BA", college: "Humanities" },
  { name: "Latin American Studies", degree: "BA", college: "Kennedy Center" },
  { name: "Latin Emphasis", degree: "BA", college: "Humanities" },
  { name: "Latin Teaching", degree: "BA", college: "Humanities" },
  { name: "Legal Studies", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Linguistics", degree: "BA", college: "Humanities" },
  { name: "Machine Learning", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Manufacturing Engineering", degree: "BS", college: "Engineering" },
  { name: "Marketing", degree: "BS", college: "Business" },
  { name: "Mathematics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Mathematics Education", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Mathematics: Applied & Computational Mathematics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Mechanical Engineering", degree: "BS", college: "Engineering" },
  { name: "Mechanical Engineering: Aerospace", degree: "BS", college: "Engineering" },
  { name: "Media Arts Studies", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Medical Laboratory Science", degree: "BS", college: "Life Sciences" },
  { name: "Microbiology", degree: "BS", college: "Life Sciences" },
  { name: "Middle East Studies/Arabic", degree: "BA", college: "Kennedy Center" },
  { name: "Molecular Biology", degree: "BS", college: "Life Sciences" },
  { name: "Music", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Music Composition", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Dance Theatre", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Music Education", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Education: K-12 Choral", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Education: K-12 Instrumental", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Brass", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Combined Piano & Organ", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Organ", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Percussion", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Piano", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: String", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Vocal", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Music Performance: Woodwind", degree: "BM", college: "Fine Arts & Communications" },
  { name: "Neuroscience", degree: "BS", college: "Life Sciences" },
  { name: "Nursing", degree: "BS", college: "Nursing" },
  { name: "Nutritional Science", degree: "BS", college: "Life Sciences" },
  { name: "Philosophy", degree: "BA", college: "Humanities" },
  { name: "Physical Education Teaching/Coaching K-12", degree: "BS", college: "Education" },
  { name: "Physical Science Education", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Physics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Physics and Astronomy", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Physics Education", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Plant and Landscape Systems", degree: "BS", college: "Life Sciences" },
  { name: "Political Science", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Political Science: Global Development", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Political Science: Political Strategy", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Political Science: Research and Analysis", degree: "BA", college: "Family, Home, & Social Sciences" },
  { name: "Portuguese", degree: "BA", college: "Humanities" },
  { name: "Portuguese Studies", degree: "BA", college: "Humanities" },
  { name: "Printmaking & Book Arts Studio", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Product & User Experience Design", degree: "BFA", college: "Fine Arts & Communications" },
  { name: "Psychology", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Public Health: Environmental/Occupational Health", degree: "BS", college: "Life Sciences" },
  { name: "Public Health: Epidemiology", degree: "BS", college: "Life Sciences" },
  { name: "Public Health: Health Promotion", degree: "BS", college: "Life Sciences" },
  { name: "Public Health: Health Science", degree: "BS", college: "Life Sciences" },
  { name: "Russian", degree: "BA", college: "Humanities" },
  { name: "Social Science Teaching", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Sociology", degree: "BS", college: "Family, Home, & Social Sciences" },
  { name: "Software Engineering", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Spanish", degree: "BA", college: "Humanities" },
  { name: "Spanish Studies", degree: "BA", college: "Humanities" },
  { name: "Spanish Teaching", degree: "BA", college: "Humanities" },
  { name: "Spanish Translation", degree: "BA", college: "Humanities" },
  { name: "Special Education: Mild/Moderate Disabilities", degree: "BS", college: "Education" },
  { name: "Special Education: Severe Disabilities", degree: "BS", college: "Education" },
  { name: "Statistics: Applied Statistics & Analytics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Statistics: Biostatistics", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Statistics: Data Science", degree: "BS", college: "Computational, Mathematical, and Physical Sciences" },
  { name: "Strategic Management", degree: "BS", college: "Business" },
  { name: "Technology & Engineering Studies: Teaching", degree: "BS", college: "Engineering" },
  { name: "Technology & Engineering Studies: Technical", degree: "BS", college: "Engineering" },
  { name: "Theatre Arts Education K-12", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Theatre Arts Studies", degree: "BA", college: "Fine Arts & Communications" },
  { name: "Wildlife & Wildlands Conservation", degree: "BS", college: "Life Sciences" }
];

const programList = document.getElementById("programList");
const programSearch = document.getElementById("programSearch");
const resultCount = document.getElementById("resultCount");
const sortSelect = document.getElementById("sortSelect");
const programTypeButtons = document.querySelectorAll("input[name='programType']");
const pagination = document.getElementById("pagination");

let currentPage = 1;
const programsPerPage = 10;

function getSelectedProgramType() {
  const selectedButton = document.querySelector("input[name='programType']:checked");
  return selectedButton ? selectedButton.value : "all";
}

function sortPrograms(list) {
  const sortedList = [...list];

  sortedList.sort((a, b) => {
    const programA = `${a.name} ${a.degree}`;
    const programB = `${b.name} ${b.degree}`;

    if (sortSelect.value === "za") {
      return programB.localeCompare(programA);
    }

    return programA.localeCompare(programB);
  });

  return sortedList;
}

function filterPrograms() {
  const searchValue = programSearch.value.toLowerCase().trim();
  const selectedType = getSelectedProgramType();

  return programs.filter(program => {
    const fullProgramText = `${program.name} ${program.degree} ${program.college}`.toLowerCase();

    const matchesSearch = fullProgramText.includes(searchValue);
    const matchesType =
      selectedType === "all" || program.degree.toLowerCase() === selectedType;

    return matchesSearch && matchesType;
  });
}

function renderPrograms() {
  const filteredPrograms = sortPrograms(filterPrograms());
  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages || 1;
  }

  const startIndex = (currentPage - 1) * programsPerPage;
  const endIndex = startIndex + programsPerPage;
  const programsToShow = filteredPrograms.slice(startIndex, endIndex);

  programList.innerHTML = "";
  resultCount.textContent = `(${filteredPrograms.length})`;

  if (filteredPrograms.length === 0) {
    programList.innerHTML = `<div class="no-results">No programs found.</div>`;
    pagination.innerHTML = "";
    return;
  }

  programsToShow.forEach(program => {
    const card = document.createElement("article");
    card.className = "program-card";

    card.innerHTML = `
      <div>
        <span>${program.name} (${program.degree})</span>
        <span class="program-meta">${program.college}</span>
      </div>
      <span class="arrow">›</span>
    `;

    programList.appendChild(card);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";

  if (totalPages <= 1) {
    return;
  }

  const previousButton = document.createElement("button");
  previousButton.innerHTML = "‹";
  previousButton.setAttribute("aria-label", "Previous page");
  previousButton.disabled = currentPage === 1;

  previousButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPrograms();
      scrollToResults();
    }
  });

  pagination.appendChild(previousButton);

  const pagesToShow = getPagesToShow(totalPages);

  pagesToShow.forEach(page => {
    if (page === "...") {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.textContent = "...";
      pagination.appendChild(dots);
      return;
    }

    const pageButton = document.createElement("button");
    pageButton.textContent = page;
    pageButton.setAttribute("aria-label", `Page ${page}`);

    if (page === currentPage) {
      pageButton.classList.add("active");
      pageButton.setAttribute("aria-current", "page");
    }

    pageButton.addEventListener("click", () => {
      currentPage = page;
      renderPrograms();
      scrollToResults();
    });

    pagination.appendChild(pageButton);
  });

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "›";
  nextButton.setAttribute("aria-label", "Next page");
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPrograms();
      scrollToResults();
    }
  });

  pagination.appendChild(nextButton);
}

function getPagesToShow(totalPages) {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

function resetToFirstPageAndRender() {
  currentPage = 1;
  renderPrograms();
}

function scrollToResults() {
  const resultsSection = document.querySelector(".results");

  if (resultsSection) {
    resultsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

programSearch.addEventListener("input", resetToFirstPageAndRender);
sortSelect.addEventListener("change", resetToFirstPageAndRender);

programTypeButtons.forEach(button => {
  button.addEventListener("change", resetToFirstPageAndRender);
});

renderPrograms();