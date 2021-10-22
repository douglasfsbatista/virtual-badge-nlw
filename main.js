const linksSocialMedia = {
  github: 'douglasfsbatista',
  youtube: 'channel/UCIQ2-zP0e_Ta2wWf2U4sp7w',
  instagram: 'douglasfsbatista',
  facebook: 'douglasfsbatista',
  twitter: 'douglasfbatista'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userProfilePicture.src = data.avatar_url
      userName.textContent = data.name
      userLinkGitHub.href = data.html_url
      userLoginGitHub.textContent = data.login
      userBio.textContent = data.bio
    })
}

function changeLinksSocialMedia() {
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeLinksSocialMedia()
getGitHubProfileInfos()
