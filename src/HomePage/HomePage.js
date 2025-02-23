import React from 'react';


function HomePage() {
  return (
    <main class="container center">
    <div class="page-area">
        <section class="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </section>
        <section class="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </section>
        <section class="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </section>
        <section class="text-box">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </section>
        <section class="text-box">
            <h1>Chart</h1>
            <p>
                <button class="randomize">randomize</button>
                <div id="chart-container">
                    <div id="chart"></div>
                </div>
            </p>
        </section>
    </div>
</main>
  );
}

export default HomePage;
