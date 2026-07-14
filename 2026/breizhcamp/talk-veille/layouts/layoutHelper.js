export function compute_column_size(columns) {
  const shorthand = {
    'is-one-third': '4-4-4',
    'is-one-quarter': '3-3-6',
    'is-one-half': '6-3-3',
  }

  let col_string = shorthand[columns] || columns.replace('is-', '')

  const parts = col_string.split('-')
  if (parts.length !== 3) {
    return 'error'
  }

  const nums = parts.map((p) => {
    const num = parseInt(p)
    return isNaN(num) ? null : num
  })

  if (nums.some((n) => n === null || n < 0 || n > 12)) {
    return 'error'
  }

  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum !== 12) {
    return 'error'
  }

  return {
    l: nums[0] / 12,
    c: nums[1] / 12,
    r: nums[2] / 12,
  }
}

export function compute_alignment(horizontal, vertical) {
  const hMap = {
    l: 'text-left',
    c: 'text-center',
    r: 'text-right',
  }

  const vMap = {
    t: 'items-start',
    m: 'items-center',
    b: 'items-end',
  }

  const h = hMap[horizontal] || 'error'
  const v = vMap[vertical] || 'error'

  if (h === 'error' || v === 'error') return 'error'

  return `${h} ${v} flex flex-col justify-center`
}

export function compute_margin_class(margin) {
  const map = {
    normal: 'pl-6 pr-6 pt-4 pb-4',
    tight: 'pl-4 pr-4 pt-2 pb-2',
    loose: 'pl-12 pr-12 pt-8 pb-8',
  }

  return map[margin] || 'pl-6 pr-6 pt-4 pb-4'
}