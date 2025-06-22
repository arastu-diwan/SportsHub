import React, { useState } from 'react';

const LogoHeader: React.FC = () => {
    const [showSellOptions,setShowSellOptions] = useState(false);
    const [showTicketOptions,setTicketOptions] = useState(false);

    return (
<div>
<div className="flex justify-between m-4">
        <img
          src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAxlBMVEX///8jHyD50T8gHB1CPj9WUlIAAAAeGRuop6c3NDXY19cXEhQAAB391EBJRUYdGh9fXV6VlJROQyf/2ECnjTHs6+xwXytgUinwyT0GCR7atzm1mDMzLSLGpzgfHCC4t7fv7+8VFB8uKisQCQvQ0NDe3t5zcXKwr69mY2SAfn5RTU6RkJAZFx/JyMiioaGskTOWfzCFhITnwjyGcS7TsTh3dXU8MyQqJiG/oTZDOiR8aSyPeS5VSScMAAXNrDg7ODhlVil1YyvaFoQkAAAOe0lEQVR4nO2da3+iPBOHiYiIVAVbn562giCIUmltS7s9WHe//5d6ZsIpIGoPtrK983/R32oSqldnkklmYAWBi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLqxoyjeZeNdo3gB2p5VnKPqXvG8CO1NJUcY+Sfw5HmexRIufIObLiHHcjhuOgW6LBYFPrW1CVDuwOfizHbq9Uv6JvPLgva4xJHYCGBXyn+B6M7T6WXvZ+8DUc+w2VTMc7vugblHE8ODlsr+rmNgJ0elXSevgwoIgP27Wz6wLI88PazTX8EQ7uyi57Enf/Ao6iqE53fNE3iOXYrq0o43hU0hpzfLho19onTyzI7gu+97vXBY4lA2tfyJEQuWPu+KrbtQOOhDwdwouzU4bj8PYGBh9Re/yvcbzZzPFwLcfBfRt7HjPLzvAKL4Zj98Kxv+OrbhezXh/EGiCx6+RV7K2UY/v2IK94Dfr1u41oMoPsPsI77bvjS+ayBydwgavCZX8ix4TBMXJ8Pci/S/26ff1ASkUd+y7jePm/M+B4dT/IunR7aN5nhcv+ZI7/o7PdCsfDeMIrUfeRTgG91LGH1+i8z0Omz+Ux9WfOsb2eY+TYyVSKr8/Rrf9cco7vssfYsX8njn15/IpunevMOb6BYzz5Ja3DW1hTTlLz5BxZjhv8OnLk2s3fhBxEPe3X49z2m3OMOW70a+rYJ1eRY3d7uJk5esj15RxjjpvsEdBhdHhHaPPwCUL6m7xbV4ej2e87/b5Z3ua0Rnm9deyO7HFwjyv0GQ28Sfca/n3Ry5+qVYOj2TL0eei6oW6MWitjZ762JHaDlcOMHRn+BIZOAmPkFMfuyq8jx6ZbmsEjTpZHhfZKcOw3p7atouyGKo3NXKMzJ7YsiuzHk5UMWMu3GvHYheXOClfekV+T7gs4du0C7RE3M+2zdM2pEEcnJPTbRqzkRpBrdBfwvigjqYiJLBM3vdJs2hDTsaLaMT7KcbM9xo6Nznz5DD1/PxZ6VoCjGcpAQbZFi6gqpcHAMP0FUlQ0Nwy9OpqlHOpB6vt9BUeoNrFESlmW8lPnzvyaPMVbmsEviHpOise6VeBodOC7qlO/2WwGLpISLTMDYYnwOhyPYCFpGRNFJDZrrjpilL0AxuqaSimb7LV35dfg2De4pRmSLmxmCnvCinD0EcU0skEnQA+VswyEAQNJmEyH/Qk01pnVpIO9vcg8RxMZDTI3Re7MHiPHvrsfDJ9OYE/4UOy4f46mCzaVufIEXolh2ji3YVzm57OpTBYZqT5QF0ni5Y6nEnGZywLtzB6pY7dhS/NwfbgSPFaC40ySieqlTX2YLMU0k9MHNKqbGWA/VMkiMJOXYzBHdZK2GjZ89txHf6c9rpgZA+oFou+To4Pe7/ZK8FgJjuO6SBqMEcFsKVrJCwdeqXOmN9inOjeTVxPg2MgCTgemz1zvd3J8PjhllesxuMdd9cXwD+A8Ws1s759jACsJw0IANxdJYoEONMo+09sH+wzT63jAccH8FqCmuibT/X1+fXfO6qowkq7Y56+11eCxEhx1jGuYpcNHjskU6GBIxH4YHSwuix4lnB6Z3wJ/A9VjNzXvssdaPgldy3t59xgzZW3Mt5ZMoxXgiIEN892bNrBJVhYHXli5QIewkyks1/IyazTnKpE1NoJ8lz0Wk34kh2vweNXOJQMrxtGX86GMsQCOyXzpLAocYRZgOMLUKjPVBaZuFyLxHdojIbeUY/v1paTwpwIcwYY6DMcZRozN+IXTIKLSZHrnOcK6ImtZoxnYhQDyfRzPLlj9Lo48PqMgz1cpVoWjxHAcIcfEBLdzVL2s0WwuwD4/xpHGj2yp00uvOBKz1rDU5PKE1eGIkbbEtLSQY/L7yzjKWtrbwlWHaR030p1RfLF3xT3XZFPZ3mVsj0f/BkenyLE4P27gCLtIufMxjlv3M+n8ePFYyfmRrrFrORbXa8oxnQV2yHHbeU98fot5w1zpWWU59nMci/Hj/jhe/jmJA6Krf5BjcT8TELIfvx48PGOXw3a5Y1edY72wv8b9jPcVHLfZY7f32q7dXN+etds3JY5dcY59PAxymVbcX++H4x88f+zRY8ir4ilu9TmGaj6ynqss1+/z68Ev7HFx2r0+xKTrSr+Kc8SIkF2wHTyJmOzBHi97mPx/Hl7+LSkCqAZHexNHXGiYIxzM5di6mbz8xnXm7yHNFw56WIp7VcFz3GIcnueIBpmdiOPBGGlkbv5t9hilZ15PCXmIHHt1s1M1jk6eo+kjSFkLDKMZWoBRXmab8W+zx+5LLa6noEV7q469f47FcwqHPacQECRmvlS70VhgYpUsMremHJlzCsrxM+cUazk+3KJb44EZ5l1rh8Wz8opwnBbPe7KjCVPPkRBzfQvnPcJ48Zlzsw11Uo9YgXs3JPHC3b4onkFWgKNccv6Y5r2oW4uiTCWKxNLYtAGe40rZSzP4OMfNdXvHaZkUGT7XVqpxq8AR8zNW8Tw8neMoVUtZ1kGdqefny04wr1DPXtLz8A/mFTbZ4+ABS/VuorK9yz937dVKgEpwJCrDMbCZPBfG4eI0WKnli1XIc5mTT+W51teHP+L9MnfRLoae+xTLmivAkeZd8zsWJu/akfPnZnlh3rXB/BZPze8id+XXOObkKE5oX17j7V2FU/H9c8Q6AKZEQpBydQCwsBRr8RhhHQBTpkKrBiZsh53YY3S/TOzWcV1z4baP7+VoljXRuhQmeY91KZ2UjE02caR1Kdmx2ugTdSmb7kN6xJPHs+TZAdGW5vU4d1jxnRzL77/GOinRSmfAAKPFNLZ2ioF14bKEXWjMiV3I5uxofmTvVkAdUcfeH0ezn8lM27Buz/bjGRH300ROWWD+Wlk/P9K6PTUuhDYN3O1MP1G3V8hzxZmuwa8LrEjJSh7plmZ/93MRJXRTTfT0+9I6UnsyazlOy6jLuTAI8wqy1JyNRq1ITv62BLrXEXV43xkFFtY/5paZz+RdUdH91z3My5xlgQ7d0uzv/kLY3DFqpPFJn9Y1q7bSqVsNxMjMeM4S2SwajQYW4stEmbrBjCHpKDjAVpedpYh15MVJ4DN1ABcX5xGpa3Tr88ytaWlzrfbMRj7fyTEnZt8x82idPWxacP8s2yEzzrXZjwUbG7VhMYu70KzbIh1LC6LV/Oy4nuNdaX3PylNAhpTaWd6tcUtDHZu9/zriePP1HO2CGp1sIhvN62BsKNWW6xMGk2Ao9EaFWPSuBFllp0DDI3Y8VrWkJjt2A8eLUnssKOYY3fjOOnH3BR37jEVLOX79feymrxfkB+y9RIbvapIkad5czzumOfYnrqdhozTtLAke+dg50k4w9+hYdx4Ub58p59herS0pf+4M5UjO8bkzhZLH6xsw3mfmDeDYzj174Ws4bpczms1mI8dcbaF3xc1QhhF4mIjtOKVjS666ynHwcn5+9HxfCHAun85LdEQN7gj+8ZTfBQ4eb+Hdv8xjGLo96HVdvGx1nyfluGK+7HSzSp5v1j09PR2u5qlOy0Sbhjig+NfAN3MBZOllq8tRaCr5MujN4s+JWye886Px5selco7rhNvxxsp6sk6c4zpRjtwePy3q13x+/LRwN954x3qdxvB7UXU56paYS+dslhPWO/vUhqOq/WoEjporG9gip/UBOW8eta3n9z/ZZKv6sK0xdIngYaX5tb9qxpQabNYoqCCpdRrN52Ho4ia6g0eMxH5z2PNBNZdvpWN03rzk7V9jmz6eIjnwaWT3u36RmsqP5Gg0kqeliKJqLyZvXmU+qvdw/PIPszu1pOThPfJS00fmx65iYPKsCT98TQpb+IwGAx9qMxNa88D36FTRDzQNSwQpx8CTond1TYK3YdZ0NS0wobs/19x4J2BMm75Gj/GanoQpjfnckHzB9DXtzXPs94nJj5nmRy8yU2Fo2BGa6kRXNIA2heCuNR0Lo47iR3+cZsdvYtIMORqWG9Qxj94kflNSZsi86U9n0L3jj724JtioK6GPibiZEgYEYHuyNusLgTKfb0rP/csysdhlGgqaBF/fajEcpeQb+/EDRZDjpG4KI9yAahpmMdEy4Q0JumtNtL7III3OzBRczxQmHVPwF8ARbxs1tVDou2Hpx/j3tYTvrwbCcgK2qBoMRy2pbvPjZCNy9LAeEJ/3sJwDmGV0St/S4u6GFsUMdH70JZPyGzcSjnV0bXf1I/wIaQAQDMzy4YvKLEcp4TiOH7aCHCU0J3y0Fe1fjxocLe5uSAlHmGl1sEXJw9q4hCP+/z3BZzk6Lq2yq4A6uUBzrgkt+KZYuGKScZk9Cr4cpByxTmjBcnQ8S62XcQyAo0YfzpZwJDSx/EmOLW2hVkNyjuNYEQy5jKOUPa1Fpw9jSTnis6uUecSxL0njYFrKEaZSKcQEUmqP/mg2+2xk6UymUjWUKykVWgsIeTbbI67O4wLHKYwxLUNwgGWrs5ZjfPNexHG5h/+S4/ukOh74qEU5lq4zqInWzzji/GgsDDNQWoLTeQfHZvF3/yTVjSV8ewUAmbhe41df5Tj3Io4eLhO4Xrdk2ACEwhaOWhzlxOv1D40dI7l6wxQECeLHGWkJJpIaFeZHiNTDiGNYx6pBoFV3Wy0YJjjTZtZ9haMbFyVGHKdz4QdLX4rwM1jo4+UUb25Q/NBeshyNue5iiT/dz4hzo4PPqlK08djAfaQ0GdeX6ziO5bCJkU7EcQ57IP3H2qQRPaNmYll0ATIny4kRGkIrTDlqSwXX6xkeFOtLi8ZN/tKyCMRDwN0du9jdwL12zBGr5gwNxvh1qw6X92m0Y7qK0qluTuGTclR/e6dSmdJng8GfJMdeXyG9Rb62vc9/RvrC/ODIfvhTN8vvVz+wJtt7lcgZBz/2EOwDmnkfnB0NSfMqeCjLxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcX1D+j/BGEkqoKkUb0AAAAASUVORK5CYII="}
          height={"100px"}
          width={"100px"}
        />
        <div className="content-center grid grid-rows-1 grid-flow-col gap-4 relative">
          <div className="">Explore</div>
          <div className="group hover:bg-gray-50"
          onMouseEnter={()=>setShowSellOptions(true)}
          onMouseLeave={()=>setShowSellOptions(false)}>Sell</div>

          <span className="">Favorites</span>
          <span className=""
          onMouseEnter={()=>setTicketOptions(true)}
          onMouseLeave={()=>{setTicketOptions(false)}}>My Tickets</span>
          <span className="">Sign In</span>
        </div>

      </div>
      {showSellOptions && <div className="absolute" style={{top:"110px", right:"240px"}}>
            <ul>
              <li>Sell Tickets</li>
              <li>My Tickets</li>
              <li>My Sale</li>
              </ul>
          </div>}
      {showTicketOptions && <div className="absolute" style={{top:"110px", right:"240px"}}>
            <ul>
              <li>Orders</li>
              <li>My Listing</li>
              <li>My Sales</li>
              <li>Payments</li>
              </ul>
          </div>}
</div>
    );
};


export default LogoHeader;