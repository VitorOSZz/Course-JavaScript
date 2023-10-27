before_salary = window.prompt('Say your salary')
        if (before_salary <= 280) {
            after_salary = before_salary * 1.20
        }

        if (before_salary > 280) {
            if (before_salary <= 700) {
                after_salary = before_salary * 1.15
            }
        }
        
        if (before_salary > 700) {
            if (before_salary < 1500) {
                after_salary = before_salary * 1.10
            }
        }

        if (before_salary > 1500) {
            after_salary = before_salary * 1.05
        }
    
        document.write(`<p>Your salary before is ${before_salary}, but now is ${after_salary}🤑</p>`)