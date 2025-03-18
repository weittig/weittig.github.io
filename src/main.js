// Build the portfolio website content
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    if (app) {
      app.innerHTML = `
        <div class="header">
          <img src="https://placehold.co/400x400?text=Your+Photo" alt="Your Photo" class="profile-img">
          <div class="header-content">
            <h1>Your Name</h1>
            <p><strong>Your Title</strong> <a href="#">Your School/Department</a> <a href="#">Your University/Company</a></p>
            <p><strong>Email</strong>: your.email@example.com</p>
            <div class="social-links">
              [<a href="#">Github</a>]
              [<a href="#">LinkedIn</a>]
              [<a href="/CV_YourName.pdf">CV</a>]
              [<a href="#">Google Scholar</a>]
            </div>
          </div>
        </div>
  
        <h2>Biography</h2>
        <p>Write a brief introduction about yourself here. Describe your academic background, research interests, or professional experience. Make it concise yet informative to give visitors a good understanding of who you are and what you do.</p>
  
        <h2>Recent News</h2>
        <ul class="news-list">
          <li>[MM/YYYY] Your most recent news or achievement.</li>
          <li>[MM/YYYY] Another recent accomplishment or update.</li>
          <li>[MM/YYYY] An award, publication, or other significant event.</li>
          <li>[MM/YYYY] Any other news you'd like to highlight.</li>
        </ul>
  
        <h2>Research</h2>
        <p>Describe your research focus and expertise here. What areas are you interested in? What methodologies do you use? What are the practical applications of your work?</p>
  
        <div class="research-item">
          <img src="https://placehold.co/300x200?text=Research+Image" alt="Research Project 1" class="research-img">
          <div class="research-content">
            <h3>Research Project Title 1</h3>
            <div class="research-meta"><strong>Your Name</strong>, Collaborator 1, Collaborator 2</div>
            <div class="research-meta">YYYY-Present</div>
            <div class="research-meta"><em>Publication Status</em></div>
            <div class="research-links">[<a href="#">Paper</a>] [<a href="#">Code</a>]</div>
            <p>Description of your research project. Explain the problem you're addressing, your approach, and the significance of your findings or expected outcomes.</p>
          </div>
        </div>
  
        <div class="research-item">
          <img src="https://placehold.co/300x200?text=Research+Image" alt="Research Project 2" class="research-img">
          <div class="research-content">
            <h3>Research Project Title 2</h3>
            <div class="research-meta">Collaborator 1, <strong>Your Name</strong>, Collaborator 2</div>
            <div class="research-meta">YYYY-YYYY</div>
            <div class="research-meta"><em>Journal/Conference Name</em></div>
            <div class="research-links">[<a href="#">Paper</a>] [<a href="#">Code</a>]</div>
            <p>Description of your research project. Include key methodologies, results, and impact.</p>
          </div>
        </div>
  
        <div class="research-item">
          <img src="https://placehold.co/300x200?text=Research+Image" alt="Research Project 3" class="research-img">
          <div class="research-content">
            <h3>Research Project Title 3</h3>
            <div class="research-meta"><strong>Your Name</strong>, Collaborator 1</div>
            <div class="research-meta">YYYY-YYYY</div>
            <div class="research-links">[<a href="#">Code</a>]</div>
            <p>Description of your research project. What problem are you solving? What approaches did you use? What were the outcomes?</p>
          </div>
        </div>
  
        <h2>Projects</h2>
        <h3>Individual or Collaborative Projects</h3>
  
        <div class="project-item">
          <img src="https://placehold.co/300x200?text=Project+Image" alt="Project 1" class="project-img">
          <div class="project-content">
            <h3><a href="#">Project Title 1</a></h3>
            <div class="project-meta"><strong>Your Name</strong> & Collaborator Name</div>
            <div class="project-meta">YYYY, <em>Context/Event</em></div>
            <div class="project-links">[<a href="#">Demo</a>] [<a href="#">Code</a>]</div>
            <p>Description of your project. What was the purpose? What technologies did you use? What were the challenges and outcomes?</p>
          </div>
        </div>
  
        <div class="project-item">
          <img src="https://placehold.co/300x200?text=Project+Image" alt="Project 2" class="project-img">
          <div class="project-content">
            <h3><a href="#">Project Title 2</a></h3>
            <div class="project-meta"><strong>Your Name</strong></div>
            <div class="project-meta">YYYY-YYYY</div>
            <div class="project-links">[<a href="#">Demo</a>] [<a href="#">Documentation</a>] [<a href="#">Code</a>]</div>
            <p>Description of your project. What problem did it solve? What was your role? What impact did it have?</p>
          </div>
        </div>
  
        <h2>Education</h2>
        <ul>
          <li>Degree, Department/School, University, Start Year - End Year</li>
          <li>Previous Degree, Department/School, University, Start Year - End Year</li>
        </ul>
  
        <h2>Experience</h2>
        <ul>
          <li><strong><a href="#">Position Title</a></strong>, Company/Organization, Duration.</li>
          <li><strong><a href="#">Position Title</a></strong>, Company/Organization, Duration.</li>
          <li><strong><a href="#">Position Title</a></strong>, Company/Organization, Duration.</li>
        </ul>
  
        <h2>Honors and Awards</h2>
        <table>
          <tr>
            <td>Award Name,</td>
            <td>Awarding Organization,</td>
            <td>Year</td>
          </tr>
          <tr>
            <td>Award Name,</td>
            <td>Awarding Organization,</td>
            <td>Year</td>
          </tr>
          <tr>
            <td>Award Name,</td>
            <td>Awarding Organization,</td>
            <td>Year</td>
          </tr>
        </table>
  
        <h2>Misc</h2>
        <p>Any additional information you'd like to share, such as patents, volunteer work, or hobbies.</p>
  
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: List your programming languages here</li>
          <li>Tools/Frameworks: List your technical tools and frameworks here</li>
          <li>Other Skills: List any other relevant skills</li>
        </ul>
  
        <div class="footer">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      `;
    }
  });