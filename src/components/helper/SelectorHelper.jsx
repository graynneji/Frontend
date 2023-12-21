import { Divider, Radio, Typography } from "@mui/material";

const SelectorHelper = ({array=[],onSelect,value,marginLeft=10})=>{
    return(

         array?.map((cur,)=>{
    
    return(
      typeof cur ==="string"?
      <div
      onClick={() => {
        onSelect(cur);
      }}
      style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}

    >
      <Radio
        onClick={() => {
          onSelect(cur);
        }}
        size='small'
        checked={value?.find((selected) => selected === cur) === cur}
        value={cur}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: '100%',
          marginTop: 8,
          marginBottom: 13,
        }}
      >
        <Typography
          style={{ fontWeight: 400 ,marginLeft:marginLeft}}
          onClick={() => {
            onSelect(cur);
          }}
        >
          {cur}
        </Typography>
        <Divider />
      </div>
    </div>: 
    Object.keys(cur).map((k,u)=>(
    
   <div key={u}>
    <div
        onClick={() => {
          onSelect(k);
        }}
        style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}

      >
     
        <Radio
          onClick={() => {
            onSelect(k);
          }}
          size='small'
          checked={value?.find((selected) => selected === k) === k}
          value={k}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            width: '100%',
            marginTop: 8,
            marginBottom: 13,
          }}
        >
          <Typography
            style={{ fontWeight: 400,marginLeft:marginLeft }}
            onClick={() => {
              onSelect(k);
            }}
          >
            {k}
          </Typography>
          <Divider />
        </div>
   
      </div>
      <SelectorHelper  onSelect={onSelect} value={value} array={cur[k]} marginLeft={20}/>
      </div>
       ))
    )
  })
  
    )
}
export default SelectorHelper