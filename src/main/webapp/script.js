// Sample data (expand to 400+ players)
const players = [
    { name: "Virat Kohli", category: "Batsman", basePrice: 200 },
    { name: "Jasprit Bumrah", category: "Bowler", basePrice: 180 },
    { name: "MS Dhoni", category: "Wicketkeeper", basePrice: 150 },
    { name: "Jadeja", category: "All-rounder", basePrice: 220 }
];

const teams = [
    { name: "Mumbai Indians", budget: 1000, squad: [] },
    { name: "Chennai Super Kings", budget: 1000, squad: [] },
    { name: "Royal Challengers Bangalore", budget: 1000, squad: [] },
    { name: "Kolkata Knight Riders", budget: 1000, squad: [] },
    { name: "Delhi Capitals", budget: 1000, squad: [] },
    { name: "Sunrisers Hyderabad", budget: 1000, squad: [] },
    { name: "Rajasthan Royals", budget: 1000, squad: [] },
    { name: "Punjab Kings", budget: 1000, squad: [] },
    { name: "Lucknow Super Giants", budget: 1000, squad: [] },
    { name: "Gujarat Titans", budget: 1000, squad: [] }
];

let currentPlayerIndex = 0;
let currentBid = 0;
let currentTeam = null;

function startAuction() {
    displayTeams();
    displayPlayers();
    nextPlayer();
}

function displayTeams() {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = teams.map(team =>
        `<div class="teamCard">
            <h3>${team.name}</h3>
            <p>Budget: ₹${team.budget} Cr</p>
            <p>Squad: ${team.squad.map(p => p.name).join(", ") || "None"}</p>
        </div>`
    ).join("");
}

function displayPlayers() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = players.map(p =>
        `<div class="playerCard">
            <strong>${p.name}</strong> (${p.category}) - Base ₹${p.basePrice} Cr
        </div>`
    ).join("");
}

function nextPlayer() {
    if (currentPlayerIndex >= players.length) {
        document.getElementById("playerInfo").innerHTML = "<p>Auction Complete!</p>";
        return;
    }
    const player = players[currentPlayerIndex];
    document.getElementById("playerInfo").innerHTML =
        `<h3>${player.name}</h3><p>Category: ${player.category}</p><p>Base Price: ₹${player.basePrice} Cr</p>`;
    currentBid = player.basePrice;
}

function placeBid() {
    const bidAmount = parseInt(document.getElementById("bidAmount").value);
    if (!bidAmount || bidAmount < currentBid) {
        alert("Bid must be higher than current bid!");
        return;
    }
    currentBid = bidAmount;
    currentTeam = teams[Math.floor(Math.random() * teams.length)]; // Random team for demo
    logAuction(`${currentTeam.name} bids ₹${currentBid} Cr for ${players[currentPlayerIndex].name}`);
    finalizeBid();
}

function finalizeBid() {
    if (currentTeam.budget >= currentBid) {
        currentTeam.budget -= currentBid;
        currentTeam.squad.push(players[currentPlayerIndex]);
        logAuction(`${players[currentPlayerIndex].name} SOLD to ${currentTeam.name} for ₹${currentBid} Cr`);
    } else {
        logAuction(`${currentTeam.name} cannot afford ${players[currentPlayerIndex].name}`);
    }
    currentPlayerIndex++;
    displayTeams();
    nextPlayer();
}

function logAuction(message) {
    const log = document.getElementById("auctionLog");
    log.innerHTML += `<p>${message}</p>`;
}

function resetAuction() {
    teams.forEach(team => { team.budget = 1000; team.squad = []; });
    currentPlayerIndex = 0;
    currentBid = 0;
    currentTeam = null;
    document.getElementById("auctionLog").innerHTML = "";
    startAuction();
}
