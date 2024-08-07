document.addEventListener('DOMContentLoaded', () => {
    // Function to load content based on the section clicked
    const loadContent = (section) => {
        const mainContent = document.getElementById('main-content');
        
        if (section === 'home') {
            mainContent.innerHTML = `
                <h2>Welcome to BCCI</h2>
                <p>
                    The Board of Control for Cricket in India (BCCI) is the national governing body for cricket in India. 
                    Established in 1928, the BCCI oversees the administration and development of cricket in India, 
                    including the organization of domestic and international matches, the selection of national teams, 
                    and the promotion of cricketing talent across the country.
                </p>
                <h3>About the Indian Cricket Team</h3>
                <p>
                    The Indian cricket team, led by the BCCI, is one of the most successful and popular cricket teams in the world. 
                    Known for its rich history and passionate fan base, the team has achieved significant milestones including 
                    winning the ICC Cricket World Cup in 1983 and 2011, and the ICC T20 World Cup in 2007. 
                    The team has a diverse roster of talented players who have made their mark in international cricket 
                    with exceptional performances and records.
                </p>
            `;
        } else if (section === 'teams') {
            mainContent.innerHTML = `
                <h2>Current Indian Cricket Teams</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tournament</th>
                            <th>Squad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ICC Cricket World Cup 2023</td>
                            <td>
                                <ul>
                                    <li>Rohit Sharma (C)</li>
                                    <li>Virat Kohli</li>
                                    <li>KL Rahul</li>
                                    <li>Rishabh Pant (WK)</li>
                                    <li>Hardik Pandya</li>
                                    <li>Jasprit Bumrah</li>
                                    <li>Mohammed Shami</li>
                                    <li>Ravindra Jadeja</li>
                                    <li>Yuzvendra Chahal</li>
                                    <li>Bhuvneshwar Kumar</li>
                                    <li>Shubman Gill</li>
                                    <li>Prithvi Shaw</li>
                                    <li>Axar Patel</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>ICC T20 World Cup 2024</td>
                            <td>
                                <ul>
                                    <li>Rohit Sharma (C)</li>
                                    <li>KL Rahul</li>
                                    <li>Sanju Samson</li>
                                    <li>Rishabh Pant (WK)</li>
                                    <li>Hardik Pandya</li>
                                    <li>Ravindra Jadeja</li>
                                    <li>Jasprit Bumrah</li>
                                    <li>Arshdeep Singh</li>
                                    <li>Yuzvendra Chahal</li>
                                    <li>Rahul Tewatia</li>
                                    <li>Shubman Gill</li>
                                    <li>Ruturaj Gaikwad</li>
                                </ul>
                            </td>
                        </tr>
                        <!-- Add more tournaments and squads as needed -->
                    </tbody>
                </table>
            `;
        } else if (section === 'fixtures') {
            mainContent.innerHTML = `
                <h2>Upcoming Matches</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Opponent</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-08-10</td>
                            <td>14:00 IST</td>
                            <td>India vs SL</td>
                            <td>Wankhede Stadium, Mumbai</td>
                        </tr>
                        <tr>
                            <td>2024-08-15</td>
                            <td>19:00 IST</td>
                            <td>India vs ENG</td>
                            <td>MA Chidambaram Stadium, Chennai</td>
                        </tr>
                        <tr>
                            <td>2024-08-20</td>
                            <td>15:30 IST</td>
                            <td>India vs AUS</td>
                            <td>Eden Gardens, Kolkata</td>
                        </tr>
                        <tr>
                            <td>2024-08-25</td>
                            <td>17:00 IST</td>
                            <td>India vs SA</td>
                            <td>Arun Jaitley Stadium, Delhi</td>
                        </tr>
                        <tr>
                            <td>2024-08-30</td>
                            <td>19:00 IST</td>
                            <td>India vs NZ</td>
                            <td>BRSABV Ekana Stadium, Lucknow</td>
                        </tr>
                        <tr>
                            <td>2024-09-05</td>
                            <td>16:00 IST</td>
                            <td>India vs WI</td>
                            <td>Rajiv Gandhi International Cricket Stadium, Hyderabad</td>
                        </tr>
                        <tr>
                            <td>2024-09-10</td>
                            <td>15:00 IST</td>
                            <td>India vs PAK</td>
                            <td>Punjab Cricket Association Stadium, Mohali</td>
                        </tr>
                        <tr>
                            <td>2024-09-15</td>
                            <td>18:00 IST</td>
                            <td>India vs ZIM</td>
                            <td>Jawaharlal Nehru Stadium, Kochi</td>
                        </tr>
                        <tr>
                            <td>2024-09-20</td>
                            <td>14:30 IST</td>
                            <td>India vs BAN</td>
                            <td>Chinnaswamy Stadium, Bangalore</td>
                        </tr>
                        <tr>
                            <td>2024-09-25</td>
                            <td>19:30 IST</td>
                            <td>India vs AFG</td>
                            <td>R.Premadasa Stadium, Colombo</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } else if (section === 'gallery') {
            mainContent.innerHTML = `
                <h2>Gallery</h2>
                <div class="gallery">
                    <img src="images/cricket1.jpg" alt="Cricket Image 1" class="gallery-img">
                    <img src="images/cricket2.jpg" alt="Cricket Image 2" class="gallery-img">
                    <img src="images/cricket3.jpg" alt="Cricket Image 3" class="gallery-img">
                    <img src="images/cricket4.jpg" alt="Cricket Image 4" class="gallery-img">
                    <img src="images/cricket5.jpg" alt="Cricket Image 5" class="gallery-img">
                    <img src="images/cricket6.jpg" alt="Cricket Image 6" class="gallery-img">
                    <img src="images/cricket7.jpg" alt="Cricket Image 7" class="gallery-img">
                    <img src="images/cricket8.jpg" alt="Cricket Image 8" class="gallery-img">
                    <img src="images/cricket9.jpg" alt="Cricket Image 9" class="gallery-img">
                    <img src="images/cricket10.jpg" alt="Cricket Image 10" class="gallery-img">
                </div>
                <div id="modal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="modal-img">
                </div>
            `;
            
            // Modal functionality
            const images = document.querySelectorAll('.gallery-img');
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const closeBtn = document.querySelector('.modal .close');

            images.forEach(img => {
                img.addEventListener('click', () => {
                    modal.style.display = 'flex'; // Show the modal
                    modalImg.src = img.src; // Set the src of the modal image
                });
            });

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none'; // Hide the modal
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none'; // Hide the modal if clicked outside the image
                }
            });
        } else {
            mainContent.innerHTML = `<h2>${section} Content</h2><p>Loading content for ${section}...</p>`;
        }
    };

    // Event delegation for navigation
    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const section = event.target.getAttribute('data-section');
            loadContent(section);
        }
    });

    // Load home content by default
    loadContent('home');
});
