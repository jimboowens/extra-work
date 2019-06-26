// all onload sections, only main to be modified after

let navBar = document.querySelector('.navBar')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')

//================================START OF HTML TO BE INJECTED================================
//========================================HTML ON LOAD========================================
let navBarHTML=`
    <nav class="nav-wrapper blue darken-4">
        <ul>
            <li class="OSIJobs"><a href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a><div id="about">About Us</div></div></a></li>
            <li><a><div id="contact">Contact</div></a></li>
            <li><a><div id="employerServices">Employer Services</div></a></li>
            <li><a><div id="ventureCapitalPartnership">Venture Capital Partnership</div></a></li>
            <li><a><div id="jobListings">Job Listings</div></a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div></div>
        <div id="panel" class="blue darken-4 right">
            <div><a><div id="about">About Us</div></a></div>
            <div><a><div id="contact">Contact</div></a></div>
            <div><a><div id="employerServices">Employer Services</div></a></div>
            <div><a><div id="ventureCapitalPartnership">Venture Capial Partnership</div></a></div>
            <div><a><div id="jobListings">Job Listings</div></a></div>
        </div>
    </nav>
`

let mainHTML=`
    <div class="your-class"><div class="sliderImage"></div></div><div class="container"></div></div>
    <div class="your-class">
        <div class="sliderImage">
            <img src="./public/images/fill.jpg" class="image1" />
        </div>
        <div class="sliderText">
            <h2>We fill the following types of positions</h2>
            <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance • Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management • Customer Service • Food Safety • Distribution/Logistics Management • Sanitation</p>
        </div>
        <div class="sliderImage">
            <img src="./public/images/grass.jpg" class="image2"/>
        </div>
        <div class="sliderText">
            <h2>Our Mission Statement:</h2>
            <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
        </div>
        <div class="sliderImage">
            <img src="./public/images/veggies.jpg" class="image3" />
        </div>
        <div class="sliderText">
            <h2>Excellence in Food Industry Recruitment</h2>
            <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for the perfect candidate, or you a food industry professional looking to make a change, feel free to take a look around.</p>
        </div>
        </div>
        <div class="container">
        <div class="row">
            <div class="col s12 m4">
                <h3>Welcome to OSI</h3>
                <h3>Excellence in Food Industry Executive Recruitment</h3>
                <div>
                    <ul>
                        OSI is a 20+ year-old search firm that specializes in the retained and contingency recruitment of food industry professionals.
                        The firm's Senior Partners each hold MS degrees in Food Science and have significant food industry experience.
                    </ul>
                </div> <br>
                <div>
                    <h3>Mission Statement:</h3>
                    <div>
                        <ul>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</ul>
                    </div>
                </div>
            </div>
            <div class="col s12 m4">
                <h3>Who We Are</h3>
                <div>
                    <ul class="bullet-content">
                        <li>Strong commitment to professional representation of candidates and client companies.</li>
                        <li>Handle each search with the highest degree of ethical standards.</li>
                        <li>Member of Georgia Association of Personnel Services (GAPS).</li>
                        <li>Member of Top Echelon.</li>
                        <li>Exceptionally strong technical database and networking capabilities.</li>
                        <li>Proven results with an extensive list of satisfied "long-term" candidates and client companies.</li>
                    </ul>
                </div>
            </div>
            <div class="col s12 m4">
                <h3>New Jobs:</h3>
                <div>
                    test
                </div>
            </div>
        </div>
    </div>
`

let footerHTML = `
<nav class="nav-wrapper blue darken-4">
    <ul>
        <li class="OSIJobs"><a>OSI Jobs</a></li>
        <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
        <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
        <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
    </ul>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a><div id="about">About Us</div></div></a></li>
        <li><a><div id="contact">Contact</div></a></li>
        <li><a><div id="jobListings">Job Listings</div></a></li>
    </ul>
</nav>
`
//================================END OF ONLOAD HTML INJECTIONS================================
//=============================START OF ONCLICK HTML TO BE INJECTED============================
let aboutHTML = `
<div class="aboutPage">about</div>
`

let contactHTML = `
<div class="contactPage">contact</div>
`

let employerServicesHTML = `
<div class="employerServicesPage">employer services</div>
`

let ventureCapitalPartnershipHTML = `
<div class="ventureCapitalPartnershipPage">venture capital partnership</div>
`

let jobListingsHTML = `
<div class="contactPage">job listings</div>
`
//================================END OF HTML TO BE INJECTED================================
// $.getJSON();

//This is the first get request to try to get the 200 response, but the username and password are not working even when I manually go to this url and input the information

$.getJSON( "https://loxo.co/api/osi-jobs/jobs", {username:"osi_api",password:"475629a431c25a079f30da1ebf929804"}).done((data)=> {
    var items = [];
    $.each( data, (key, val)=> {
      items.push(`<li id="${key}">${val}</li>`);
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "main" );
  });

// 401 error unauthorized as well.

var HttpClient = function(){
    this.get = (url,cb)=> {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = ()=> { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200){cb(anHttpRequest.responseText)}
        }
        anHttpRequest.open("get", url, true);            
        anHttpRequest.send(null);
    }
}

let client = new HttpClient();
client.get('https://loxo.co/api/osi-jobs/jobs', (response)=> {
    console.log(response);
})

//================================INJECTION OF HTML ONLOAD================================
$(navBar).html(navBarHTML)
$(main).html(mainHTML)
$(footer).html(footerHTML)

//=======================ONLOAD COMPLETE, LISTENING FOR CLICK EVENT=======================
$(document).ready(()=> {
    //slick slider data for mainHTML on load
    let slickSlideStart = $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        draggable:true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    })
    slickSlideStart
    //dropdown menu toggle
    $("#dropdown").click(()=>{
        $("#panel").slideToggle("slow")
        $(".your-class").slideToggle("slow")
    })
    //click handlers for links 
    // $(OSIJobs).click(()=>{
    //     $(main).html(mainHTML)
    //     slickSlideStart
    // })
    $("#contact").click(()=>{
        console.log("contact")
        $(main).html(contactHTML)
    })
    $("#about").click(()=>{
        $(main).html(aboutHTML)
    })
    $("#employerServices").click(()=>{
        $(main).html(employerServicesHTML)
    })
    $("#ventureCapitalPartnership").click(()=>{
        $(main).html(ventureCapitalPartnershipHTML)
    })
    $("#jobListings").click(()=>{
        $(main).html(jobListingsHTML)
    })

})

