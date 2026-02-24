### application web Helpdesk

pas de description du projet pour l'instant.

<div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          <Header tickets={tickets} setIsModalOpen={setIsModalOpen} />
          {isModalOpen && (
            <CreateTicketModal
              tickets={tickets}
              setTickets={setTickets}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          <main className="flex-1 bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<DashboardAgent tickets={tickets} />} />
              <Route
                path="/Communs/ListTicket"
                element={
                  <ListTicket tickets={tickets} setTickets={setTickets} />
                }
              />
              {/* <Route path="/TicketDetail" element={<TicketDetail tickets={tickets} setTickets={setTickets} />} /> */}
              {/* Ajoutez d'autres routes ici */}

              <Route
                path="/Communs/CreateTicket"
                element={
                  <CreateTicket tickets={tickets} setTickets={setTickets} />
                }
              />

              <Route
                path="/Agent/MesTickets"
                element={
                  <MesTickets
                    tickets={tickets}
                    setTickets={setTickets}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                }
              />
            </Routes>

            {/* {isModalOpen && <CreateTicketModal onClose={() => setIsModalOpen(false)} />} */}
          </main>
        </div>
      </div>




    <Header />
      {isModalOpen && (
        <CreateTicketModal
          tickets={tickets}
          setTickets={setTickets}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <Routes>
        {/* Contenu principal */}
        <Route
          path="/"
          element={
            <Acceuil
              tickets={tickets}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          }
        ></Route>

        {/* {Autres pages} */}

        <Route
          path="/Client/CreateTicket"
          element={<CreateTicket tickets={tickets} setTickets={setTickets} />}
        ></Route>

        <Route
          path="/Client/ListTicket"
          element={<ListTicket tickets={tickets} />}
        ></Route>
        <Route path="/Client/Faqs" element={<Faqs />}></Route>
        <Route path="/Client/Chats" element={<Chats />}></Route>
        <Route
          path="/Client/TicketDetail/:id"
          element={<TicketDetail />}
        ></Route>
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
