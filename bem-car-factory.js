let car = [
    {"name":"Toyota Camry", 
    "price": "$500", 
    "pic":"http://www.toyotareference.com/colors/camry/toyota_camry_87_8E3_06.jpg", 
    "year": "1987", 
    "color": "Blue", 
    "milage": "so many", 
    "engine": "idk",
    "description": "My first car, surprisingly indestructable."}, 
    
    {"name":"Chrysler PT Loser", 
    "price": "$2,000", "pic":"http://st.motortrend.com/uploads/sites/5/2003/01/112-0301-one-year-test-verdict-2001-chrysler-pt-cruiser-01l-2001-chrysler-pt-cruiser-front-left-view.jpg?interpolation=lanczos-none&fit=around|660:346", 
    "year": "2003", 
    "color": "Silver", 
    "milage": "65k", 
    "engine": "whatever",
    "description": "Like a tiny Mini Van with horrible mpg."}, 
    
    {"name":"Jeep Wrangler Sahara", 
    "price": "$16,000", 
    "pic":"https://media.ed.edmunds-media.com/jeep/wrangler/2007/oem/2007_jeep_wrangler_convertible-suv_rubicon_fq_oem_3_500.jpg", 
    "year": "2007", 
    "color": "Red Rock Crystal", 
    "milage": "50k", 
    "engine": "3.8l V6", 
    "description": "It's sick."}, 

];

const carString = JSON.stringify(car);
localStorage.setItem("car", carString);