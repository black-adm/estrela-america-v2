'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/axios'

import { DownloadCloudIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'

interface UploadData {
  file: FileList
}

export function DashboardUploadImages() {
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
  } = useForm<UploadData>()
  const [uploadStatus, setUploadStatus] = useState<string>('')

  const onSubmit = async (data: UploadData) => {
    const formData = new FormData()
    formData.append('file', data.file[0])

    await api
      .post('/uploads/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        toast.success('Imagem carregada com sucesso!')
        setUploadStatus('O upload da imagem foi conclúido com êxito.')
      })
      .catch(() => {
        toast.error('Erro ao carregar arquivo! Tente novamente.')
        setUploadStatus('Erro ao fazer upload do arquivo! Tente novamente.')
      })
  }

  return (
    <>
      <div className="pt-12">
        <h1 className="text-xl font-bold text-primary-orange">
          Fazer upload de imagem
        </h1>

        <div className="max-w-xl pt-6">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center space-y-2 pt-4 pb-6">
                <DownloadCloudIcon />
                <p className="text-sm font-extrabold text-black">
                  Clique para subir a imagem do seu dispositivo
                </p>

                <p className="text-sm text-muted-foreground">
                  ou arraste e solte dentro do campo.
                </p>
                <span className="text-xs text-medium-blue">
                  SVG, PNG, JPG or GIF
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  {...register('file', { required: true })}
                />
                <Button
                  type="submit"
                  className="mt-6 bg-medium-blue text-orange-400 hover:opacity-90"
                >
                  Finalizar upload
                </Button>

                {errors.file && (
                  <span className="py-4 text-primary-red text-xs font-medium">
                    O arquivo de imagem é obrigatório.
                  </span>
                )}
              </form>
            </label>
          </div>
        </div>
        {uploadStatus && (
          <div className="pt-5 text-black font-semibold">
            <Badge className="bg-primary-blue">Status do envio</Badge>{' '}
            <span className="pl-3 font-medium text-sm text-muted-foreground">
              {uploadStatus}
            </span>
          </div>
        )}
      </div>
      <Toaster richColors />
    </>
  )
}
