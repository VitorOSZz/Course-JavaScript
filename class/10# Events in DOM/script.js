TitleElement = window.document.querySelector('#Title')
        /* If thing do thing */
        TitleElement.addEventListener('mouseenter', joined)
        TitleElement.addEventListener('click', clicked);
        TitleElement.addEventListener('mousedown', clicking)
        TitleElement.addEventListener('mouseout', outed)

        /* If thing do !!   function!! */

        function joined () {
            TitleElement.style.background = 'lightgray'
            TitleElement.innerHTML = 'LOL'
            console.log(' My button join?.')
        }
        function clicked () {
            TitleElement.style.background = 'gray'
            TitleElement.innerHTML = '🤣😂😂'
            console.log('My button was clicked.')
        }
        function clicking () {
            TitleElement.style.background = 'blue'
            console.log( 'Clicking')
        }
        function outed () {
            TitleElement.style.background = 'white'
            TitleElement.innerHTML = 'Click here'
            console.log(' My button exited.')
        }
