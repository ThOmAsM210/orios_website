// Translation dictionary for English and Italian
const translations = {
    en: {
      navHome: "Home",
      navFeatures: "Features",
      navAbout: "About Us",
      navContact: "Contact",
      heroTitle: "Streamline Your Teacher Scheduling",
      heroSubtitle: "Revolutionize how you manage teacher swaps, substitutions, and more.",
      btnExplore: "Explore Features",
      featuresTitle: "Features",
      feature1Title: "Easy Swaps",
      feature1Text: "Manage teacher swap requests with an intuitive interface.",
      feature2Title: "Substitution Management",
      feature2Text: "Efficiently handle substitution requests and approvals in real time.",
      feature3Title: "Real-Time Notifications",
      feature3Text: "Stay updated with instant notifications and live scheduling updates.",
      aboutTitle: "About Us",
      aboutParagraph1: "We are two passionate developers united by the desire to innovate and simplify teacher scheduling. Our solution simplifies administrative tasks, enabling teachers to focus on what truly matters: education.",
      aboutParagraph2: "With complementary skills and a shared vision, we built TeacherFlow using cutting-edge technology to offer an exceptional user experience and modern features. We are two, and we believe in the power of collaboration to transform the world of education.",
      contactTitle: "Contact Us",
      contactName: "Your Name",
      contactEmail: "Your Email",
      contactMessage: "Your Message",
      contactBtn: "Send",
      footerText: "&copy; 2025 TeacherFlow. All rights reserved."
    },
    it: {
      navHome: "Home",
      navFeatures: "Caratteristiche",
      navAbout: "Chi Siamo",
      navContact: "Contatti",
      heroTitle: "Semplifica la pianificazione degli insegnanti",
      heroSubtitle: "Rivoluziona la gestione degli scambi, delle sostituzioni e molto altro.",
      btnExplore: "Esplora le funzionalità",
      featuresTitle: "Caratteristiche",
      feature1Title: "Scambi Semplici",
      feature1Text: "Gestisci le richieste di scambio degli insegnanti con un'interfaccia intuitiva.",
      feature2Title: "Gestione delle Sostituzioni",
      feature2Text: "Gestisci in modo efficiente le richieste di sostituzione e le approvazioni in tempo reale.",
      feature3Title: "Notifiche in Tempo Reale",
      feature3Text: "Rimani aggiornato con notifiche istantanee e aggiornamenti in tempo reale.",
      aboutTitle: "Chi Siamo",
      aboutParagraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est dolor, hendrerit ac interdum in, varius in eros. Pellentesque tempus iaculis tincidunt. Praesent sed est lectus. Nunc accumsan ante nisl, sit amet dictum odio accumsan tristique. Praesent id erat vel leo scelerisque molestie. Suspendisse condimentum consectetur urna, quis mattis eros imperdiet id. Etiam faucibus eleifend tortor. Phasellus auctor molestie magna vitae cursus. Nullam et odio tortor. Fusce eu convallis lorem. Donec ut neque vitae sem finibus facilisis non lacinia lorem. Mauris eros lacus, rutrum eu lobortis nec, tristique quis ligula. Phasellus in lacus enim.",
      aboutParagraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est dolor, hendrerit ac interdum in, varius in eros.",
      contactTitle: "Contattaci",
      contactName: "Il tuo nome",
      contactEmail: "La tua email",
      contactMessage: "Il tuo messaggio",
      contactBtn: "Invia",
      footerText: "&copy; 2025 TeacherFlow. Tutti i diritti riservati."
    }
  };
  
  function updateLanguage(lang) {
    document.body.setAttribute("data-lang", lang);
    document.getElementById("navHome").innerText = translations[lang].navHome;
    document.getElementById("navFeatures").innerText = translations[lang].navFeatures;
    document.getElementById("navAbout").innerText = translations[lang].navAbout;
    document.getElementById("navContact").innerText = translations[lang].navContact;
    document.getElementById("heroTitle").innerText = translations[lang].heroTitle;
    document.getElementById("heroSubtitle").innerText = translations[lang].heroSubtitle;
    document.getElementById("btnExplore").innerText = translations[lang].btnExplore;
    document.getElementById("featuresTitle").innerText = translations[lang].featuresTitle;
    document.getElementById("feature1Title").innerText = translations[lang].feature1Title;
    document.getElementById("feature1Text").innerText = translations[lang].feature1Text;
    document.getElementById("feature2Title").innerText = translations[lang].feature2Title;
    document.getElementById("feature2Text").innerText = translations[lang].feature2Text;
    document.getElementById("feature3Title").innerText = translations[lang].feature3Title;
    document.getElementById("feature3Text").innerText = translations[lang].feature3Text;
    document.getElementById("aboutTitle").innerText = translations[lang].aboutTitle;
    document.getElementById("aboutParagraph1").innerText = translations[lang].aboutParagraph1;
    document.getElementById("aboutParagraph2").innerText = translations[lang].aboutParagraph2;
    document.getElementById("contactTitle").innerText = translations[lang].contactTitle;
    document.getElementById("contactName").setAttribute("placeholder", translations[lang].contactName);
    document.getElementById("contactEmail").setAttribute("placeholder", translations[lang].contactEmail);
    document.getElementById("contactMessage").setAttribute("placeholder", translations[lang].contactMessage);
    document.getElementById("contactBtn").innerText = translations[lang].contactBtn;
    document.getElementById("footerText").innerHTML = translations[lang].footerText;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    updateLanguage("it");
  
    // Language switcher event listeners
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        const lang = this.getAttribute("data-lang");
        updateLanguage(lang);
      });
    });
  
    // Mobile navigation toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    mobileMenuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", function() {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
        }
      });
    });
  
    // Back-to-top button functionality
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
  });
  

  