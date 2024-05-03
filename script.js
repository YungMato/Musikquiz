var curArtist;

var a1 = [
    "ABBA",
    "10. Does Your Mother Know","9. Slipping Through my Fingers","8. Cassandra",
    "7. Head Over Heels","6. SOS","5. Super Trouper",
    "4. Money, Money, Money", "3. The Winner Takes it all", "2. Dancing Queen", "1. Waterloo"];

var a2 = [
    "Scooter",
    "10. Friends","9. Waste Your Youth","8. Thirty, Rough and Dirty",
    "7. Berliner Luft","6. God Save The Rave","5. Army Of Hardcore",
    "4. Nessaja", "3. How Much Is The Fish", "2. Hyper Hyper", "1. Maria (I Like It Loud)"]; 

var a3 = [
    "DJ Antoine",
    "10. Chicken Nuggets","9. Pizza, Spaghetti e Techno","8. Crazy World",
    "7. Holiday","6. Woke Up Like This","5. Vampires",
    "4. Sky Is The Limit", "3. Bella Vita", "2. Welcome To St. Tropez", "1. Ma Chérie"];  

var a4 = [
    "Madonna",
    "10. Open Your Heart","9. Vogue","8. Lucky Star",
    "7. Papa Don't Preach","6. Frozen","5. Holiday",
    "4. 4 Minutes", "3. Material Girl", "2. Don't Cry For Me Argentina", "1.Like A Virgin"];  

var a5 = [
    "Slipknot",
    "10. Gently", "9. Metabolic","8. Eyeless",
    "7. Eeyore","6. My Plague","5.Disasterpiece",
    "4.Everything Ends","3. Left Behind","2. Wait and Bleed","1. Psychosocial"];

var a6 = [
    "Sido",
    "10. Sterne", "9. Best Day","8. Pyramiden",
    "7. Jedes Geheimnis","6. Bljad","5. Schöner Tag",
    "4. Mein Testament","3. Goldjunge","2. Augen Auf","1. Carmen"];

var a7 = [
    "Katy Perry",
    "10. Legendary Lovers", "9. Birthday","8. Fingerprints",
    "7.","6.This Is How We Do","5. Bon Appétit",
    "4. Dark Horse","3. Roar","2.I Kissed A Girl","1. California Gurls"];

var a8 = [
    "Eminem",
    "10. Soldier", "9. White America","8. Cleanin' Out My Closet",
    "7. Superman","6. No Love","5. Not Afraid",
    "4. Till I Collapse","3. Without Me","2. Love The Way You Lie","1. Lose Yourself"];

var a9 = [
    "Gorillaz",
    "10. 19-2000", "9. Tormenta","8. Dirty Harry",
    "7. She's My Collar","6. New Gold","5. On Melancholy Hill",
    "4. Rhinestone Eyes","3. DARE","2. Clint Eastwood","1. Feel Good Inc."];

var a10 = [
    "Tokio Hotel",
    "10. Darkside Of The Sun", "9. Automatic","8. Ready, Set, Go!",
    "7. Scream","6. White Lies","5. Don't Jump",
    "4. Monsoon","3. Fahr mit mir (4x4)","2. Schrei","1. Durch den Monsun"];

var a11 = [
    "Nena",
    "10. La La Lu", "9. Jung Wie Du","8. Wunder geschehen",
    "7. Ein Brief","6. Nur geträumt","5. Du Kennst Die Liebe Nicht",
    "4. Leuchtturm","3 Strobopop","2. Irgendwo, Irgendwie, Irgendwann","1. 99 Luftballons"];

var a12 = [
    "Kanye West",
    "10. I Wonder", "9. BURN","8.Father Stretch My Hands Pt. 1",
    "7. Runaway","6. Bound 2","5. Carnival",
    "4. Flashing Lights","3. American Boy","2. Heartless","1. N**as In Paris"];

var a13 = [
    "Money Boy",
    "10. Mismatch", "9. Tsunami","8. Steaks",
    "7. Pfirsichnektar","6. Perkys","5. Tuc Cracker",
    "4. kbO freesytle","3. Drip Drop","2. Monte Carlo","1. Dreh den Swag auf"];

var a14 = [
    "Taylor Swift",
    "10. Down Bad", "9. Out Of The Woods","8. Mine",
    "7. Fornight","6. Hits Different","5.Cruel Summer",
    "4. I Don't Wanna Live Forever","3. Anti-Hero","2. Shake It Off","1. We Are Never Ever Getting Back Together"];

var a15 = [
    "Linkin Park",
    "10. Figure.09", "9. Guilty All The Same","8. Lying From You",
    "7. Bleed It Out","6. Points Of Authority","5. Papercut",
    "4. What I've Done","3. Breaking The Habit","2.In The End","1. Numb"];

var a16 = [
    "Die Ärzte",
    "10. Die Hard", "9. THOR","8. Für Uns",
    "7. Himmelblau","6. Deine Schuld","5. Zu Spät",
    "4. M&F","3. Junge","2. Lasse redn","1. Schrei Nach Liebe"];

var a17 = [
    "Ed Sheeran",
    "10. Bloodstream", "9. Visiting Hours","8. Perfect",
    "7. Photograph","6. Happier","5. I See Fire",
    "4. Shivers","3. Galway Girl","2. Bad Habits","1. Shape Of You"];

var a18 = [
    "Michael Jackson",
    "10. Another Part Of Me", "9. We are The World","8. Man In The Mirror",
    "7. Earth Song","6. They Don't Care About Us","5. Bad",
    "4. Dirty Diana","3. Smooth Criminal","2. Beat It","1. Thriller"];

var a19 = [
    "Queen",
    "10. Play The Game", "9. Somebody To Love","8. Bicycle Race",
    "7. You're My Best Friend","6. Under Pressure","5. Radio Ga Ga",
    "4. Don't Stop Me Now","3. Another One Bites The Dust","2. Bohemian Rhapsody","1. We Will Rock You"];

var a20 = [
    "Raf Camora",
    "10. 100%", "9. Nema Bolje","8. R.R.B.B",
    "7. Toto","6. Nummer","5. Vendetta",
    "4. Adriana","3. Blaues Licht","2. Palmen aus Plastik","1. Ohne Mein Team"];
    
var muster = [
    "",
    "10. ", "9.","8.",
    "7.","6.","5.",
    "4.","3.","2.","1."];

var artists = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20];

var songlist = $("#tracks");
var artistCounter = 0;
var songCounter = 0;

var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

$( document ).ready(function() {
    curArtist = artists[artistCounter];
});

function nextSong(){
    songCounter++;
    songlist.append("<li>" + curArtist[songCounter] + "</li>");
}

function nextArtist(){
    songlist.empty();

    songCounter = 0;
    artistCounter++;

    curArtist = artists[artistCounter];

    $("#active").removeAttr("id");
}

function setActive(playerId){
    $("#player").children().eq(playerId).attr("id","active");
}

function rightAnswer(){
    if($("#active")){
        var curPoints = parseInt($("#active").children(".life").html());

        $("#active").children(".life").html(curPoints + (10-songCounter+1));
        nextArtist();
        resetArtistName();
    }
}

function wrongAnswer(){

    for(var i = 0; i < 4; i++){
        curPlayer = $("#player").children().eq(i);

        if(curPlayer.attr("id") != "active"){
            var curPoints = parseInt(curPlayer.children(".life").html());
            curPlayer.children(".life").html(curPoints + 1);
        }
    }

    $("#active").removeAttr("id");
}

function revealArtist(){
    $("#artistfont").html(curArtist[0]);
}

function resetArtistName(){
    $("#artistfont").html("Unknown Artist");
}