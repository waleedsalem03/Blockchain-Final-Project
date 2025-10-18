# Blockchain Project – Beginner-Friendly Overview and Implementation Guide

## Introduction

The three simple projects described here demonstrate how blockchain technology can be used for different purposes. A blockchain is a **peer‑to‑peer** digital ledger that allows transactions to be recorded without the need for a trusted third party【256098753320887†L520-L533】.  Because each block of data is approved by a network of computers and linked to the previous block, the ledger becomes **tamper‑proof**, making it suitable for recording ownership, identity and other data【230731999133931†L125-L135】.

Non‑fungible tokens (NFTs) extend this idea by representing unique digital or real‑world items.  Each NFT is a unique token on a blockchain; it has an identification code derived from its metadata and cannot be replicated【190840439027991†L284-L296】.  NFTs can represent digital collectibles or real‑world assets, and “tokenising” these assets makes buying, selling and trading them efficient【190840439027991†L311-L319】.

## Project 1 – Metaverse Land Platform

This platform lets users register and log in, explore a virtual map and buy or sell parcels of land represented on the blockchain.  Lands can be subdivided or combined, priced by their owners, and sold to other users.  A simple dashboard allows the platform’s administrators to manage users and fees.  The **smart contract** stores each parcel on‑chain and enables transferring ownership when the price is paid.

### Phase I – Analysis and Sketching

To plan the user interface, first list the screens and their purpose:

| Screen | Purpose |
| --- | --- |
| **Home page** | Overview of the platform with links to registration, login and map |
| **Register** | Form to create a new account (username and password) |
| **Login** | Form to authenticate an existing account |
| **Map** | Display of the virtual land parcels (placeholder in this simple version) |
| **Admin panel (optional)** | Manage users, set fees and approve transactions |

These sketches correspond to the HTML files located in `metaverse_platform/frontend/`.  Each page is intentionally minimal: the map page simply announces that the map will appear there in a future version.

### Phase II – Front‑End Implementation

The front‑end uses plain **HTML**, **CSS** and **JavaScript** with no build tools.  Key files:

* `index.html` – main landing page with navigation links.
* `register.html` and `login.html` – forms for user registration and login.
* `map.html` – placeholder page for the virtual map.
* `styles.css` – basic styling for layout, navigation and forms.
* `script.js` – handles form submissions by sending `fetch` requests to the backend.  It displays messages returned by the server and keeps the interface responsive.

To run the front‑end, open the HTML files in a browser.  No compilation or bundling is required.

### Phase III – Backend API

The backend for the Metaverse platform is a simple **Node.js** application using Express and CORS.  The server (`metaverse_platform/backend/server.js`) exposes `/register` and `/login` endpoints that store user credentials in memory.  Future development could extend this API to provide land‑related endpoints (e.g., minting, pricing and purchasing parcels).  To start the server:

```bash
cd blockchain_project/metaverse_platform/backend
npm install
npm start
```

The server listens on **port 3000** by default.

### Phase IX – Smart Contract

The `LandMarketplace.sol` smart contract stores land parcels on the blockchain.  It defines a `Land` structure with an ID, owner address, price and sale status.  Users call `mintLand()` to create parcels, `setPrice()` to list their parcel for sale, and `buyLand()` to purchase a listed parcel.  Compile and deploy this contract in Remix and use it to integrate blockchain functionality into the platform.

## Project 2 – Certificate Verification Platform

This site shows how blockchains can help verify the authenticity of certificates or diplomas.  In a blockchain verification system, the issuer adds the certificate’s digital identifier to the ledger so verifiers can check it later; this works like a **public, secure stamp of approval**【230731999133931†L125-L135】.

### Phase I – Analysis and Sketching

| Screen | Purpose |
| --- | --- |
| **Home page** | Overview with navigation links |
| **Register** | Register a new user |
| **Login** | Authenticate an existing user |
| **Document Certificate** | Form to store a certificate ID and its hash on the blockchain |
| **Admin panel (optional)** | Manage issuing entities, requesters and fees |

### Phase II – Front‑End Implementation

The front‑end uses the same simple stack as the Metaverse platform.  The `certificate.html` page lets an issuer enter a certificate ID and a certificate hash.  On submission, the form sends the data to the backend for storage.

### Phase III – Backend API

The certificate platform’s backend (port 4000) includes endpoints for user registration and login as well as `/issue` and `/verify` for storing and checking certificates.  Certificates are held in memory with their ID and hash.  Example usage:

```bash
cd blockchain_project/certificate_platform/backend
npm install
npm start
```

### Phase IX – Smart Contract

`CertificateVerification.sol` stores certificate hashes on‑chain.  The issuer calls `issueCertificate()` with a certificate ID and hash; verifiers call `verifyCertificate()` to check that a provided hash matches the stored one.  Compile and deploy this contract in Remix for on‑chain verification.

## Project 3 – Digital Goods and NFT Marketplace

The third platform demonstrates an NFT‑driven marketplace for digital goods such as game assets.  NFTs can represent unique digital items, and because each token contains a unique identifier, no two tokens are identical【190840439027991†L284-L296】.  This uniqueness allows buyers and sellers to trade items securely and efficiently【190840439027991†L311-L319】.

### Phase I – Analysis and Sketching

| Screen | Purpose |
| --- | --- |
| **Home page** | Overview with links to registration, login and products |
| **Register as Merchant** | Create a merchant account to list products |
| **Register as Buyer** | Create a buyer account to purchase products |
| **Login** | Authenticate merchants or buyers |
| **Products** | View existing products, add a new product (for merchants) and display product list |
| **Admin panel (optional)** | Manage listings, auctions and fees |

### Phase II – Front‑End Implementation

The NFT marketplace uses similar HTML, CSS and JS files as the other projects.  The `products.html` page includes a product list and a form to add new products.  The JavaScript fetches products from the backend and updates the list dynamically.

### Phase III – Backend API

The NFT backend (port 5000) keeps separate arrays for merchants, buyers and products.  It exposes:

* `/register-merchant` – register a merchant account
* `/register-buyer` – register a buyer account
* `/login` – authenticate user (either merchant or buyer)
* `/add-product` – merchants can add products with name and price
* `/list-products` – returns the list of products

To run the server:

```bash
cd blockchain_project/nft_platform/backend
npm install
npm start
```

### Phase IX – Smart Contract

`NFTMarketplace.sol` defines a simple marketplace contract.  It allows a creator to mint an item with a URI and price and lets buyers purchase the item by sending the required payment.  In this simplified version the contract does not implement full ERC‑721 functionality but demonstrates how items can be created and sold on‑chain.

## Phase X – Final Submission

To complete the final phase:

1. Record a short **YouTube demo** showing how to navigate each platform’s front‑end, register users, issue certificates and add products.
2. Create a **GitHub repository** containing the `blockchain_project` folder with all front‑end, backend and smart contract files.
3. Include this report in the repository as documentation.

All code provided here avoids comments referring to AI and is intended for beginners.  Each part is kept as simple as possible to help you learn and extend the project.