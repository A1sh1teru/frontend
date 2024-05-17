import { Category } from '../types/category'

const BASE = 'http://localhost:9999/api'

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}