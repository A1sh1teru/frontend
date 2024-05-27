import { Category } from '../types/category'
import { Card } from '@/types/card'

const BASE = 'http://localhost:9999/api'

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}

export async function fetchCards(): Promise<Card[]> {
    const res2 = await fetch(`${BASE}/card`)
    if (!res2.ok) throw new Error('Ошибка загрузки категорий')
        return res2.json()
}
