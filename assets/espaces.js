
const modal = document.getElementById('roomModal');
const closeBtn = document.querySelector('.close');
const rooms = document.querySelectorAll('.room');

const roomData = {
  default: {
    title: 'Pépinière tertiaire – 3 rue Henry Potez – 28100 Dreux',
    features: [
      '16 bureaux de 25 m²',
      '1 salle de réunion (40 personnes)',
      '1 centre d\'affaires',
      '1 salle de pause'
    ],
    tarifs: [
      { superficie: '25 m²', loyer: '106,00 €', services: '39,00 €', charges: '76,14 €', taxe: '59,58 €', total: '280,72 €' }
    ],
    notes: [
      'Services communs (forfait) : animation de la pépinière, signalétique, accès aux salles de réunions et matériel mis à disposition',
      'Charges (provision) : régularisation en fin d\'exercice comptable. Fluides (eau, électricité, gaz), ménage espaces communs, maintenance de la chaufferie, entretien espaces verts et réparations diverses (bureau loué + parties communes).',
      'Taxe foncière (provision) : régularisation en fin d\'exercice comptable',
      'Possibilité de partager un bureau avec un autre locataire afin de démarrer sereinement une activité avec un loyer modéré (50% du tarif ci-dessus par locataire – Limité à 2 locataires maximum).'
    ]
  }
};

rooms.forEach(room => {
  room.addEventListener('click', function() {
    const roomNum = this.getAttribute('data-room');
    const data = roomData[roomNum] || roomData.default;
    
    let modalHTML = `
      <h2 class="modal-title">${data.title}</h2>
      <ul>
        ${data.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <h3>Tarifs HT mensuels</h3>
      <table class="tarif-table">
        <thead>
          <tr>
            <th>Superficie</th>
            <th>Loyer</th>
            <th>Services communs*</th>
            <th>Charges*</th>
            <th>Taxe Foncière*</th>
            <th>Total HT</th>
          </tr>
        </thead>
        <tbody>
          ${data.tarifs.map(t => `
            <tr>
              <td>${t.superficie}</td>
              <td>${t.loyer}</td>
              <td>${t.services}</td>
              <td>${t.charges}</td>
              <td>${t.taxe}</td>
              <td><strong>${t.total}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="note">
        ${data.notes.map(n => `<p>${n}</p>`).join('')}
      </div>
    `;
    
    document.getElementById('modalBody').innerHTML = modalHTML;
    modal.style.display = 'block';
  });
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
