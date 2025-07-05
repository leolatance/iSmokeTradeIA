# 📱 Como Adicionar as Imagens dos Depoimentos Reais

## Passo 1: Preparar as Imagens

1. **Salve as 3 imagens** na pasta `public/` do projeto:
   - `public/depoimento1.jpg` (ou .png)
   - `public/depoimento2.jpg` (ou .png)
   - `public/depoimento3.jpg` (ou .png)

2. **Tamanho recomendado**: Máximo 1MB cada imagem para carregamento rápido

## Passo 2: Atualizar o Código

No arquivo `src/components/TestimonialsSimple.tsx`, localize estas linhas:

```typescript
const testimonialImages = [
  {
    id: 1,
    src: null, // Substituir por: "/path/to/depoimento1.jpg"
    alt: "Depoimento 1 - Print real de lucro",
    placeholder: "📱"
  },
  {
    id: 2,
    src: null, // Substituir por: "/path/to/depoimento2.jpg"
    alt: "Depoimento 2 - Print real de lucro",
    placeholder: "💰"
  },
  {
    id: 3,
    src: null, // Substituir por: "/path/to/depoimento3.jpg"
    alt: "Depoimento 3 - Print real de lucro",
    placeholder: "🚀"
  }
];
```

E **substitua por**:

```typescript
const testimonialImages = [
  {
    id: 1,
    src: "/depoimento1.jpg", // ✅ Caminho da sua imagem
    alt: "Depoimento 1 - Print real de lucro",
    placeholder: "📱"
  },
  {
    id: 2,
    src: "/depoimento2.jpg", // ✅ Caminho da sua imagem
    alt: "Depoimento 2 - Print real de lucro",
    placeholder: "💰"
  },
  {
    id: 3,
    src: "/depoimento3.jpg", // ✅ Caminho da sua imagem
    alt: "Depoimento 3 - Print real de lucro",
    placeholder: "🚀"
  }
];
```

## Passo 3: Testar

Rode o comando para ver o resultado:
```bash
npm run dev
```

## 🎯 Resultado Final

- **Desktop**: 3 imagens lado a lado
- **Mobile**: 3 imagens empilhadas
- **Hover**: Bordas com efeito neon
- **Responsivo**: Adapta automaticamente

## 🔧 Ajustes Opcionais

Se quiser personalizar ainda mais:

### Alterar descrições das imagens:
```typescript
alt: "Seu texto personalizado aqui"
```

### Adicionar mais imagens:
Basta duplicar um dos objetos no array e alterar o `id` e `src`.

---

**⚠️ Importante**: As imagens devem estar na pasta `public/` e os caminhos devem começar com `/` (barra). 