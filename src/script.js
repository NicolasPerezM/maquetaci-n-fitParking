
//------------------------------------------------------------------------------------//
//----------------INICIO DE SESIÓN COMO CLIENTE O ADMIN-------------------------------//
//------------------------------------------------------------------------------------//

const clienteBtn    =   document.getElementById('clienteBtn');
const adminBtn      =   document.getElementById('adminBtn');

const selectAdmin  =  () => {
    if(clienteBtn.classList.contains('border-main-yellow') && adminBtn.classList.contains('border-gray-700')) {

        clienteBtn.classList.remove('border-main-yellow', 'bg-black', 'bg-opacity-80');
        clienteBtn.classList.add('border-gray-700', 'bg-main-black');
        adminBtn.classList.remove('border-gray-700', 'bg-main-black');
        adminBtn.classList.add('border-main-yellow', 'bg-black', 'bg-opacity-80');
    }
}

const selectCliente  =  () => {
    if(clienteBtn.classList.contains('border-gray-700') && adminBtn.classList.contains('border-main-yellow')) {

        adminBtn.classList.remove('border-main-yellow', 'bg-black', 'bg-opacity-80');
        adminBtn.classList.add('border-gray-700', 'bg-main-black');
        clienteBtn.classList.remove('border-gray-700', 'bg-main-black');
        clienteBtn.classList.add('border-main-yellow', 'bg-black', 'bg-opacity-80');
    }
}

adminBtn.addEventListener('click', selectAdmin)
clienteBtn.addEventListener('click', selectCliente)

document.addEventListener('DOMContentLoaded', () => {
    // Agregar evento de click al botón de nuevo ticket
    const newTicketButton = document.querySelector('.new-ticket');
    newTicketButton.addEventListener('click', () => {
      alert('New ticket functionality is not yet implemented.');
    });
  
    // Agregar evento de click a los alertas
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
      alert.addEventListener('click', () => {
        alert.classList.toggle('hidden');
      });
    });

    // Agregar funcionalidad de toggle a los summary boxes
    const summaryBoxes = document.querySelectorAll('.summary-box');
    summaryBoxes.forEach((summaryBox) => {
      summaryBox.addEventListener('click', () => {
        summaryBox.classList.toggle('bg-yellow-500');
      });
    });
  });
  const svg = d3.select(".chart svg");
const margin = 40;
const width = 740 - 2 * margin;
const height = 300 - 2 * margin;

const x = d3.scaleBand()
  .range([0, width])
  .domain(Object.keys(revenueData))
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, d3.max(Object.values(revenueData))])
  .range([height, 0]);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

svg.append("g")
  .call(d3.axisLeft(y));

svg.append("path")