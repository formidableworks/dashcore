import { Theme, Grid, Paper, SxProps, Typography } from '@mui/material';
import { DeliveryConfigRoot } from './DeliveryConfigRoot';
import { FieldMock } from './FieldMock';
import { GridIndicator } from './GridIndicator';
import { ResponsiveCard } from './ResponsiveCard';
import { TrackingConfigRoot } from './TrackingConfigRoot';

const sxStyles: Record<string, SxProps<Theme>> = {
  paper: { padding: 1, border: 1, borderRadius: 1, borderColor: (t) => t.palette.divider },
};

export function OrderTwoMuiGrid(): JSX.Element {
  return (
    <Grid container sx={{ pl: 1, pr: 1, mb: 4 }} spacing={1}>
      {/* ORDER DETAILS */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Paper elevation={0} sx={sxStyles.paper}>
          <GridIndicator tag="Order Detail" tagVariant="h5" xs={6} sm={6} md={8} lg={8} xl={8} />
          <Grid container spacing={1}>
            <FieldMock fieldName="Requestor" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Req org" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Continent" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Country" xs={12} sm={12} md={6} lg={6} xl={4} />
          </Grid>
          <Typography variant="subtitle2">Recipient</Typography>
          <Grid container spacing={1}>
            <FieldMock fieldName="Name" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Sales Contract" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Location" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Acc Code" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Detail Code" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Branch Code" xs={12} sm={12} md={6} lg={6} xl={4} />
            <FieldMock fieldName="Top" xs={12} sm={12} md={6} lg={4} xl={4} />
            <FieldMock fieldName="TPM" xs={12} sm={12} md={6} lg={8} xl={4} />
            <FieldMock fieldName="Nationality" xs={12} sm={12} md={12} lg={12} xl={12} />
          </Grid>
        </Paper>
      </Grid>
      {/* Cert and Approvals */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Paper elevation={0} sx={sxStyles.paper}>
          <GridIndicator
            tag="Certs &amp; Approvals"
            tagVariant="h5"
            xs={6}
            sm={6}
            md={8}
            lg={8}
            xl={8}
          />
          <Grid container spacing={1}>
            <FieldMock fieldName="Cert code" xs={12} sm={12} md={12} lg={12} xl={8} />
            <FieldMock fieldName="Cert id" xs={12} sm={12} md={6} lg={6} xl={2} />
            <FieldMock fieldName="Cert type" xs={12} sm={12} md={6} lg={6} xl={2} />
          </Grid>
          <Typography variant="subtitle2">Approvals</Typography>
          <Grid container spacing={1}>
            <FieldMock
              fieldName="Appr code"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              minHeightRem={5}
            />
            <FieldMock
              fieldName="Appr id"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              minHeightRem={5}
            />
            <FieldMock
              fieldName="Appr type"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              minHeightRem={5}
            />
          </Grid>
        </Paper>
      </Grid>
      <ResponsiveCard xs={12} sm={12} md={12} lg={6} xl={6}>
        <DeliveryConfigRoot />
      </ResponsiveCard>
      <ResponsiveCard xs={12} sm={12} md={12} lg={6} xl={6}>
        <TrackingConfigRoot />
      </ResponsiveCard>
    </Grid>
  );
}
