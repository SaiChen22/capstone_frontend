import React from 'react';

const Main = () => {
    return (
        <main>
            <section className="specials-section">
                <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="specials-cards">
                    <div className="card">
                        {/* Greek Salad */}
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <a>Order a delivery</a>
                    </div>
                    <div className="card">
                        {/* Bruschetta */}
                        <h3>Bruschetta</h3>
                        <p>$5.99</p>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a>Order a delivery</a>
                    </div>
                    <div className="card">
                        {/* Lemon Dessert */}
                        <h3>Lemon Dessert</h3>
                        <p>$5.00</p>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a>Order a delivery</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main; 