const colorPicker = document.getElementById('body-color');
colorPicker.addEventListener('click', function(){
const colors = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
document.body.style.background = colors;
});

function dayMonthDateYear(){
        let justNow = new Date();
        let justWeekDay = { weekday: "short" };
        let exactSchedule = {
            month: 'short',
            day: 'numeric',
            year: 'numeric'

        };
        document.getElementById('justDay').innerText = justNow.toLocaleDateString("en-US", justWeekDay) + ' ,';
        document.getElementById('time').innerText = justNow.toLocaleDateString("en-US", exactSchedule);
        const taskTimes = document.getElementsByClassName('taskTime');
        for(const taskTime of taskTimes){
            taskTime.innerText = justNow.toLocaleDateString("en-US", exactSchedule);
        }
        
    
}
dayMonthDateYear()

document.getElementById('clear-history').addEventListener('click', function(){
    document.getElementById('activity-log').innerHTML = '';
})


let sixCount = 6;
let twentyThree = 23;
const frees = document.getElementsByClassName('complete');

for (const free of frees) {
    free.addEventListener('click', function (event) {
        alert('Board Updated Succesfully.')
        if (sixCount > 0) {
            sixCount--;
            twentyThree++;

            document.getElementById('six-count').textContent = sixCount;
            document.getElementById('twenty-three').textContent = twentyThree;

            const somoy = new Date();
            const timeString = somoy.toLocaleTimeString();
            const implement = document.createElement("p");
            implement.classList.add('font-poppins-new', 'text-gray-600', 'text-base', 'font-normal', 'mt-5', 'px-5')
            implement.innerText = `You have completed the ${this.dataset.course} at ${timeString}`;
            document.getElementById("activity-log").appendChild(implement);
                    
            this.disabled = true;
            this.classList.add("disabled");
            this.style.backgroundColor = "#6c7ffa87";
            this.style.cursor = "not-allowed";
            
            
        }
    });
}
document.getElementById('finish').addEventListener('click', function(){
    alert('Congrates!!! You have completed all the current task.')
})

document.getElementById('go').addEventListener('click', function() {
    window.location.href = 'blog.html';
});


// twenty-three five









