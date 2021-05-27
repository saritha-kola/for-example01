/// <reference types="cypress" />

describe ('Test Suite', () => {
    Cypress.Commands.add('authenticate', () => {
        const USER_CREDENTIALS = {
            "username" : "tester01",
            "password" : "GteteqbQQgSr88SwNExUQv2ydb7xuf8c"

        }
        cy.request({
            method : 'POST',
            url : 'http://localhost:3000/api/login',
            headers : {
                'Content-Type': 'application/json'
            },
            body : USER_CREDENTIALS
        }).then((response => {
            expect(response.status).to.eq(200)
            Cypress.env({loginToken: response.body})
            cy.log(response.body)

        }))
    })
    it('Get request to /api/login ', () => {
        cy.authenticate ()

    })
    it('Get request to /api/bills', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/bills',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('POST request to /api/bills/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/bills/new',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {
                "value":"1500",
                "paid":true
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('PUT request to /api/bills/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/bills/2',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {
                   "id" : "2",
                "value":"2500",
                "paid":false
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('DELETE request to /api/bills/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/bills/new',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }
              

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('Get request to /api/reservations', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/reservations',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('POST request to /api/reservations/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/bills/2',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {
                "client":1,
                "room":2,
                "bill":2,
                "start":"2021-03-21",
                "end":"2021-03-24"
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('PUT request to /api/reservation/new', () => {

       cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/reservation/1',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {
                "client":2,
                "room":2,
                "bill":2,
                "start":"2020-03-21",
                "end":"2020-03-24"
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('DELETE request to /api/reservations/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
     
               method : 'GET',
               url : 'http://localhost:3000/api/bills/new',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }
              

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('Get request to /api/rooms', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/rooms',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('POST request to /api/room/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/room/2',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {

                 "features":[],
                 "category":"twin",
                 "number":"103",
                 "floor":"1",
                 "available":true,
                 "price":"3000"
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('PUT request to /api/rooms/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/room/2',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               },
               body : {
                  "id" : "2",
                "features":[],
                 "category":"single",
                 "number":"103",
                 "floor":"1",
                 "available":true,
                 "price":"1000"
               }

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
     it('DELETE request to /api/rooms/new', () => {
        cy.authenticate().then((response => {
            cy.request ({
               method : 'GET',
               url : 'http://localhost:3000/api/rooms/new',
               headers : {
                   'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                   'Content-Type' : 'apllication/json'
               }
              

            }).then((resonse => {
                expect(response.status).to.eq(200)
            }))

        }))
    })
    it('POST request towards /api/logout', () => {
        cy.authenticate().then((response => {
            cy.request( {
                method:'POST',
                url: 'http://localhost:3000/api/logout',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type':'application/json'
                }
            })
        }))
    })
        it('GET request to /api/client/{lastID}', () => {
            cy.authenticate().then((response => {
                cy.request( {
                    method : 'GET',
                    url : 'http://localhost:3000/api/clients',
                    headers : {
                        'X-User-Auth' : JSON.stringify(Cypress.env().loginToken),
                        'Content-Type' : 'application/json'
                    }
                }).then((response => {
                    expect(response.status).to.eq(200)
                    let lastID = response.body[response.body.length-1].id
                    cy.log(lastID)
                    cy.request ({
                        method : 'GET',
                        url : 'http://localhost:3000/api/client/' +lastID,
                        headers : {
                            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                            'Content-Type':'application/json'
                        }
                    }).then(response => {
                        expect(response.status).to.eq(200)
                        cy.log(JSON.stringify(response.body))
                    })
                   
                }))

            }))
        })
    })
        