# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina a pasta de trabalho como /app
WORKDIR /app

# Copie o arquivo package*.json para a pasta de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para a pasta de trabalho
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Defina o comando para iniciar o aplicativo
CMD ["npm", "start"]