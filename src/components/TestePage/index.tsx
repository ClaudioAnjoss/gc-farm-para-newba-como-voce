import { MagicMotion } from 'react-magic-motion'

export default function TestPage() {
  return (
    <MagicMotion>
      <div className="max-h-[500px] overflow-y-auto">
        <table className="w-full bg-blue-50">
          <thead className="sticky top-0 z-50 bg-amber-400">
            <tr>
              <th className="py-2 text-center">Desafios</th>
              <th className="py-2 text-center">Outros</th>
            </tr>
          </thead>
          <tbody>
            {/* Adicionando várias linhas para ativar o scroll */}
            <tr>
              <td className="py-2 text-center">Teste 1</td>
              <td className="py-2 text-center">Teste 2</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 3</td>
              <td className="py-2 text-center">Teste 4</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 5</td>
              <td className="py-2 text-center">Teste 6</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 7</td>
              <td className="py-2 text-center">Teste 8</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 9</td>
              <td className="py-2 text-center">Teste 10</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 11</td>
              <td className="py-2 text-center">Teste 12</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 13</td>
              <td className="py-2 text-center">Teste 14</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 15</td>
              <td className="py-2 text-center">Teste 16</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 17</td>
              <td className="py-2 text-center">Teste 18</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 19</td>
              <td className="py-2 text-center">Teste 20</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 21</td>
              <td className="py-2 text-center">Teste 22</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
            <tr>
              <td className="py-2 text-center">Teste 23</td>
              <td className="py-2 text-center">Teste 24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MagicMotion>
  )
}
