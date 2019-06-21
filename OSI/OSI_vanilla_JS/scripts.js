let main = document.querySelector('.main')
let navBar = document.querySelector('.navBar')
let about=document.querySelector('#about')
let contact=document.querySelector('#contact')
let employerServices=document.querySelector('#employerServices');
let ventureCapitalPartnership=document.querySelector('#ventureCapitalPartnership')
let jobListings=document.querySelector('#jobListings')
let navBarHTML;

navBarHTML=`
    <nav class="nav-wrapper blue darken-4">
        <ul>
            <li class="OSIJobs"><a>OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a id="about">About Us</a></li>
            <li><a id="contact">Contact</a></li>
            <li><a id="employerServices">Employer Services</a></li>
            <li><a id="ventureCapitalPartnership">Venture Capial Partnership</a></li>
            <li><a id="jobListings">Job Listings</a></li>
        </ul>
        <!-- <li><div id="menuDropdown" class="right show-on-med-and-down">Menu</div></li> -->
        </ul>
    </nav>
`
$(document).ready(()=> {
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
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
      });

    // let menuDropdown=document.querySelector('#menuDropdown')
    // $(menuDropdown).on('click',()=>{
    //     menuDropdown.innerHTML=`
    //         <li class="navBarMenu right">
    //             <a class="blue darken-4 menuItem" id="about">About Us</a>
    //             <a class="blue darken-4 menuItem" id="contact">Contact</a>
    //             <a class="blue darken-4 menuItem" id="employerServices">Employer Services</a>
    //             <a class="blue darken-4 menuItem" id="ventureCapitalPartnership">Venture Capial Partnership</a>
    //             <a class="blue darken-4 menuItem" id="jobListings">Job Listings</a>
    //         </li>
    //     `
    // })
});
$(navBar).html(navBarHTML)

let mainHTML=`
    <div class="your-class">
        <div class="sliderImage">
            <img src="./public/images/fill.png" class="image1" />
            <ul class="sliderText">
                <h2>We fill the following types of positions</h2>
                <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance • Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management • Customer Service • Food Safety • Distribution/Logistics Management • Sanitation
                </p>
            </ul>
        </div>
        <div class="sliderImage">
            <img src="./public/images/grass.png" class="image2"/>
            <ul class="sliderText">
                <h2>Our Mission Statement:</h2>
                <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
            </ul>
        </div>
        <div class="sliderImage">
            <img src="./public/images/veggies.png" class="image3" />
            <ul class="sliderText">
                <h2>Excellence in Food Industry Recruitment</h2>
                <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for the perfect candidate, or you a food industry professional looking to make a change, feel free to take a look around.</p>
            </ul>
        </div>
    </div>
    <div class="row center">
        <div class="col s4">test</div>
        <div class="col s4">test</div>
        <div class="col s4">test</div>
    </div>
      
`
$(main).html(mainHTML)





var HttpClient = function(){
    this.get = (aUrl, aCallback)=> {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = ()=> { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "get", aUrl, true );            
        anHttpRequest.send( null );
    }
}

let client = new HttpClient();
client.get('https://loxo.co/api/osi-jobs/jobs', (response)=> {
    console.log(response);
});