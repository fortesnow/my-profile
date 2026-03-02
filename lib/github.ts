const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_API = 'https://api.github.com';

export async function inviteCollaborator(
  repoFullName: string,
  githubUsername: string
): Promise<{ success: boolean; error?: string }> {
  const res = await fetch(
    `${GITHUB_API}/repos/${repoFullName}/collaborators/${githubUsername}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ permission: 'pull' }),
    }
  );
  if (!res.ok) {
    const body = await res.text();
    return { success: false, error: `GitHub API ${res.status}: ${body}` };
  }
  return { success: true };
}

