<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>IPL Auction Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>🏏 IPL Auction Game</h1>
        <nav>
            <button onclick="startAuction()">Start Auction</button>
            <button onclick="resetAuction()">Reset</button>
        </nav>
    </header>

    <main>
        <section id="teams">
            <h2>Teams</h2>
            <div id="teamList"></div>
        </section>

        <section id="auction">
            <h2>Live Auction</h2>
            <div id="playerInfo"></div>
            <div id="bidControls">
                <label for="bidAmount">Bid Amount:</label>
                <input type="number" id="bidAmount" min="50" step="50">
                <button onclick="placeBid()">Place Bid</button>
            </div>
            <div id="auctionLog"></div>
        </section>

        <section id="players">
            <h2>Available Players</h2>
            <div id="playerList"></div>
        </section>
    </main>

    <footer>
        <p>© 2026 IPL Auction Simulator</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
