export default function SeguroForm() {
  return (
    <form className="p-6 space-y-8">
      {/* Dados Pessoais */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-blue-800 border-b pb-2">Dados do Segurado</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nome completo*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">CPF/CNPJ*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Data de Nascimento*</label>
            <input
              type="date"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Telefone*</label>
            <input
              type="tel"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">E-mail*</label>
            <input
              type="email"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">CEP*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Endereço*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo de Residência*</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="residence" className="mr-2" required /> Casa
              </label>
              <label className="flex items-center">
                <input type="radio" name="residence" className="mr-2" /> Apartamento
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Profissão</label>
            <input
              type="text"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Estado Civil</label>
            <select className="input-field">
              <option>Solteiro(a)</option>
              <option>Casado(a)</option>
              <option>Divorciado(a)</option>
              <option>Viúvo(a)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dados do Veículo */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-blue-800 border-b pb-2">Dados do Veículo</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Placa*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Marca/Modelo*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Ano*</label>
            <input
              type="text"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Câmbio*</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="gearbox" className="mr-2" required /> Manual
              </label>
              <label className="flex items-center">
                <input type="radio" name="gearbox" className="mr-2" /> Automático
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Financiado?*</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="financed" className="mr-2" required /> Sim
              </label>
              <label className="flex items-center">
                <input type="radio" name="financed" className="mr-2" /> Não
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Dados de Uso */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-blue-800 border-b pb-2">Utilização do Veículo</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Principal uso*</label>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center">
                <input type="radio" name="usage" className="mr-2" required /> Lazer
              </label>
              <label className="flex items-center">
                <input type="radio" name="usage" className="mr-2" /> Trabalho
              </label>
              <label className="flex items-center">
                <input type="radio" name="usage" className="mr-2" /> Dia a dia
              </label>
              <label className="flex items-center">
                <input type="radio" name="usage" className="mr-2" /> App/Mobilidade
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Garagem em casa*</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="home_garage" className="mr-2" required /> Sim
                </label>
                <label className="flex items-center">
                  <input type="radio" name="home_garage" className="mr-2" /> Não
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Garagem no trabalho</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="work_garage" className="mr-2" /> Sim
                </label>
                <label className="flex items-center">
                  <input type="radio" name="work_garage" className="mr-2" /> Não
                </label>
                <label className="flex items-center">
                  <input type="radio" name="work_garage" className="mr-2" /> Não utiliza
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Vai para escola/faculdade?</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="school" className="mr-2" /> Sim
                </label>
                <label className="flex items-center">
                  <input type="radio" name="school" className="mr-2" /> Não
                </label>
                <label className="flex items-center">
                  <input type="radio" name="school" className="mr-2" /> Não utiliza
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        Enviar Cotação
      </button>
    </form>
  );
}