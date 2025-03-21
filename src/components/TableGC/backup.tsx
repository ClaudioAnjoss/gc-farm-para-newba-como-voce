import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaStar, FaRegStar, FaUndoAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { characters } from './data'
import iPersonagem from './iTypes'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export default function TableGC() {
  const [data, setData] = useState<iPersonagem[]>(() => {
    // Verificar se já existem dados no localStorage
    const storedData = localStorage.getItem('characters')
    if (storedData) {
      return JSON.parse(storedData)
    }
    return characters
  })

  const contarIdasConcluidas = (personagem: iPersonagem) => {
    return personagem.missoes.reduce((total, missao) => {
      return total + missao.idas.filter((ida) => ida).length
    }, 0)
  }

  const ordenarPorMissoesFeitas = (personagens: iPersonagem[]) => {
    return [...personagens].sort((a, b) => {
      const idasA = contarIdasConcluidas(a)
      const idasB = contarIdasConcluidas(b)

      return idasB - idasA // Ordena do maior para o menor (quem fez mais missões sobe)
    })
  }

  const handleStarClick = (
    personagemId: number,
    missaoId: number,
    index: number,
  ) => {
    setData((prevData) => {
      const novaLista = prevData.map((personagem) => {
        if (personagem.id === personagemId) {
          const updatedMissoes = personagem.missoes.map((missoes) => {
            if (missoes.id === missaoId) {
              const updatedIdas = [...missoes.idas]
              updatedIdas[index] = !updatedIdas[index] // Alternando entre true e false
              return { ...missoes, idas: updatedIdas }
            }
            return missoes
          })
          return { ...personagem, missoes: updatedMissoes }
        }
        return personagem
      })

      // 🔥 Agora a gente ordena antes de atualizar o estado!
      return ordenarPorMissoesFeitas(novaLista)
    })
  }

  const resetMissoes = () => {
    // Lógica para limpar ou resetar os dados
    setData(
      data.map((item) => ({
        ...item,
        missoes: item.missoes.map((missao) => ({
          ...missao,
          idas: missao.idas.map(() => false), // Resetando todas as missões para não concluídas
        })),
      })),
    )
  }

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(data))
  }, [data])

  return (
    <>
      <Button
        variant="outline"
        className="mb-4 text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer"
        onClick={resetMissoes}
      >
        <FaUndoAlt className="mr-2" />
        Resetar Missões
      </Button>
      <Table className="w-full bg-blue-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <TableCaption className="text-xl font-semibold text-center text-gray-800 py-3">
          Danillo noob.
        </TableCaption>
        <TableHeader className="border-2 rounded-4xl">
          <TableRow className="sticky top-0 z-10">
            <TableHead
              className="text-center text-lg font-bold bg-blue-200 py-2"
              colSpan={5}
            >
              Desafios
            </TableHead>
            {data.length > 0 &&
              data[0].missoes.map(({ id, nome, imagem }) => (
                <TableHead key={id} className="text-center p-2 space-y-2">
                  <Avatar className="border border-blue-300 mx-auto">
                    <AvatarImage src={imagem} alt={nome} />
                    <AvatarFallback>{nome}</AvatarFallback>
                  </Avatar>
                  <span className="block text-sm text-gray-700">{nome}</span>
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ id, nome, imagem, missoes }) => (
            <TableRow
              key={id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <motion.td
                className="font-medium justify-center text-gray-700 py-3"
                colSpan={5}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  <Avatar className="mb-2">
                    <AvatarImage src={imagem} alt={nome} />
                    <AvatarFallback>{nome}</AvatarFallback>
                  </Avatar>
                  <span className="text-md font-semibold text-gray-800">
                    {nome}
                  </span>
                </div>
              </motion.td>
              {missoes.map(({ id: missaoId, idas }) => (
                <TableCell
                  key={missaoId}
                  className="text-center py-2 border border-x-blue-100"
                >
                  {idas.map((concluida, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`cursor-pointer transition-colors duration-300 ${concluida ? 'text-yellow-400' : 'text-gray-400'}`}
                      onClick={() => handleStarClick(id, missaoId, index)}
                    >
                      {concluida ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-gray-400" />
                      )}
                    </Button>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
