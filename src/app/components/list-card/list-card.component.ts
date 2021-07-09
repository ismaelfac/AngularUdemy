import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  public cards: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle Video 1',
        img: 'https://lh3.googleusercontent.com/jfgKLDNe7Xn1E1h7gZvdkSCkpofHCkYNN5xkbcM_x6nWtHG2vfV8Xp_cROVlwZ-jLSR8LAmJPr4xvAF2gNqUu6z90Alwjk5ZBQSbxdb2BLdIAkR1ZvmZbmZWE68pL9Or_fOzjc-jkOcFg9gmtBrz9UpPekuKhjGcdlcZ8EhLtKrw_52aX-2yS9vH5rzNL2sfGE-KOlkM4aQpB7PkfavUuzcv5AgfoRyaACJWr6VWxOwdx4sa-doTKrMRgMSqOgNsc7ZP_HV7W38jQNRmBNwcLB2NrK-sQRHmftal8HUIhMVs8lczLZko-VIAf32YklDrNfZqlOTqEMB-ei97RoEBgVIYP68Mjdnt-La0y_GDi7VwFubkoex6VtFtQYjzYn_YiHYUTyMonmKh9PiMw_VZkzQcnGaWiAjyHIRP-CkoC886o8JG7dbVcQEEuON9y6HXLunORNiuc5Zbk-P6vxJLmFDrc4awVNHciP4yFRQTVSUhdFlYPPhRkjp4X7QtZoD5Fyvq8zi06Ijm4ndLPCg_-B4WVXYNaICnV07w9VBW_vN6SYdCKJ3Im_CpK6DiTWv0LOCvKfplQ3ST7wnWlzHnf9wX1d3j7m1swA_AFNcCNH8imvWr396NETVPc5h5oQkLhxjnNORqt-TAAOUGAw9qAANSYzdGQbU97u1AtFe80NlhakpKF2w7HIsu7hq5HW0S4aO9hFeSVmDxhKd4hQ6CzihR=w262-h231-no?authuser=0'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle Video 2',
        img: 'https://lh3.googleusercontent.com/jlizTJiGgsIL8NMHua6tOS0dGcJbfnn_1zrmRDrvYTsixJvt8MQkJZU51U62O35KlwnaB5XxuVco2bkCTvnLHD1lA_S6tDA556tPy1yJZ-Yxhnxd7LHyvMPoOgud2-56f71eQDTeaOrPJNqztPbELMbxw7AIZNpi6cOgDYtuV8yzEpFJmaO-DMNfbiYMEgQOIIYUS1X34hUvEPQFRlkV6kkDyxGmADkNKe_ljm9SM0vfQER7v59v6RfO-zyycEn9YmkdchaPIEa2Z-786lMdSzcF-liID34ak0dgI_ExMINpwkASGXi3zgOx1qcQhV5pthTYPtq-lDlQVhllVJQCP9vO0B9HFV2lHy7cdP-_cPiA8diKOKXASIToEVfuxSpZdnMh3HCUEkTXaIhmr1FvuZI_LOzi3z0LMiw5_hMZpxr8rI7kvuZ6jmD0AnFUDCuMkQEjBMojpV2cjAv0po_Dv-w0KBIGirIfIQa0IcjsxT4OoPlf_l8IGjzu4N9FFoAPOma8znpBLePskpqFHjcja1DtH-a2E93zRVrURocoZytiQntQzXe9kG24xa6_1JJYuv0ybtIAS02eka_Mt1Es4Ew4yyGi9D-MR0YrtknosuBm6jmC2Cc5Z22sj2JchiOLDPnnI4UZoZe0knn6mHSZsvKd67jaHJ7AS89HgS3-_-OBzGeRFlzkkzoHQDI6VG2wysY04JZebmfbKVVqX3wu5x_D=w316-h231-no?authuser=0'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle Video 3',
        img: 'https://lh3.googleusercontent.com/AMUYDkb73rr7Onmz1GuezOb9gTTEA-XX21jeF0CZzoKHZXrBPx7z3ucyFtDXNDLghXZ-lWzUoxMzixHGu85qCC_mZ7_9PfUPzLrHsIldHM1TFd5ltaacOXZJqBU1ipkBXgk6oB5jikFB3PbsuHor8d4nGVVASH5KpAFEHS2YuGkQUSIzq3fuMpK9zquvjxB_Td4XA4gfmoA0KDHcPpBbe8t74f-F2v-cE4ijBxddt9z0rhlZ7edhIXS6nG1xU9hyuH8LdU_HMQVUVgSx4e8K_wmiUuTSEiBibAFc1VPQxYBoPapU-d5H4dkGH9T_6JLKHhTk7sbohNGT0aoVzcYkZlb3SQHp8fLY9TZxJ-6SFvwjHBiq58Z_xlurtLL-t6DvZipk12ABqlM7eLQffRa-JrJV56rgxVZZl5Rjch1c4d9mu4rtfoSFfRqolkCRNYpHf-srKGNrY_MwJS6rAMEGR1BEyL7q_KzXRrSYHWL5ylHDsQhd0ey0hINImUqOWxnSkIp2s7Mh950bf-elbYtOZlPnicd0haJ4pTSutUputBllKAO64B5H9tjO4rE1sei3m0tCUzdI9U5yk62m4C7xj0-XozrK-9cCVcJ-nerpj0VoXtSU1JQ5SlaLio0D_iTTtirtA2VOTCQbVbKqS_Bam_t9NaRu7DotfAgETpR56KDZYIhbMR5QuqbESAIXcHrQ66u2G9DoeRY2jEAXjSxnobhp=w500-h346-no?authuser=0'
      },
    ]
  }

}
