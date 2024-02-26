import { FormData } from '@/components/contact/Contact';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  if (response.status === 500) {
    return false
  }
  return true
}