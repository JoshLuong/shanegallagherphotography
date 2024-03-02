import { FormData } from '@/components/contact/Contact';
import { Asset } from '@/types/graphql';

export async function sendEmail(data: FormData, gallery: Asset[]) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({ emailData: data, gallery }),
  })
  if (response.status === 500) {
    return false
  }
  return true
}