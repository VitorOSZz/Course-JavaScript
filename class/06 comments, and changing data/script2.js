HowMany = window.prompt('How much money do you have in X Business?')
        HowMany = Number(HowMany)
        HowMany = HowMany * 1.01
        HowMany = HowMany.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        window.alert(`If this business give 1% per month you will have ${HowMany} next month`)